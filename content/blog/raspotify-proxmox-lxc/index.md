---
title: 'Raspotify + Proxmox LXC: Audio device passthrough'
description: Setting up and passing an audio device to Raspotify in a Proxmox Debian LXC.
updatedAt: 2024-07-21
img: cover.png
---

<blog-img src="cover.png" alt="Cover image showing logos for Proxmox, Linux Containers, and Spotify" />

[Raspotify](https://github.com/dtcooper/raspotify) is a popular open-source
[Spotify Connect](https://connect.spotify.com/) client designed to "just work" on a Raspberry Pi.
[Proxmox](https://www.proxmox.com/en/) is a popular open-source server virtualization solution that
simplifies container and virtual machine management. This post details how I run Raspotify inside a
Debian LXC, using an audio device shared from the host machine. I assume a reasonable level of Linux
and Proxmox knowledge.

## Creating the Debian LXC

I use tteck's famous scripts to quickly set up Proxmox containers and services. This one sets up a Debian 12 LXC: <https://tteck.github.io/Proxmox/#debian-lxc>. As always, exercise caution when executing scripts from the internet.

Take note of the numeric ID of the given container, I'll refer to it as `<CTID>`.

## Finding the audio devices

In Linux, `/dev/snd` is a directory that contains device files related to the sound subsystem of the operating system. These files are used to interface with the sound hardware of the computer. The three that we're interested in are:

1. `pcmC0D0p`, a PCM playback device for the first sound card (Card 0, Device 0).
1. `controlC0`, used for controlling various mixer and sound card parameters for Card 0.
1. `timer`, used for timing purposes in audio applications.

Run `ls -l /dev/snd` to check that these files exist; we'll need to give our LXC access to them.

## Passing through the audio devices

Since PVE 8.1, we can pass through devices using the following syntax: `pct set <CTID> -dev<n> /dev/path/to/file`.

In our case we need to pass through three devices.

```sh
pct set <CTID> -dev1 /dev/snd/pcmC0D0p
pct set <CTID> -dev2 /dev/snd/controlC0
pct set <CTID> -dev3 /dev/snd/timer
```

Alternatively, you can edit the configuration file for the container, store in `/etc/pve/lxc/<CTID>.conf`. Mine looks like this:

```yaml
arch: amd64
cores: 1
dev1: /dev/snd/controlC0
dev2: /dev/snd/pcmC0D0p
dev3: /dev/snd/seq
dev4: /dev/snd/timer
features: keyctl=1,nesting=1
hostname: raspotify
memory: 2048
net0: name=eth0,bridge=vmbr0,hwaddr=AB:12:CD:34:EF:56,ip=dhcp,type=veth
onboot: 1
ostype: debian
rootfs: local-lvm:vm-CTID-disk-0,size=2G
swap: 512
unprivileged: 1
```

Reboot the container to apply your changes.

## Setting up the container

Log in to the container.

### Fixing the audio devices

I found that the devices were owned by the `root` group instead of the `audio` group.

1. Check who owns the files with `ls -l /dev/snd`. If you see `root audio` then that's great - skip the following steps. If you're like me and see `root root`, then continue.
1. Run `chown root:audio /dev/snd/*` to fix the device permissions, these will be reset on every boot.
1. Set up a crontab script to fix the permissions on boot.
   1. Run `crontab -e`, and press enter to confirm that we want to use the `nano` text editor.
   1. Append the following to the bottom of the file: `@reboot chown root:audio /dev/snd/*`.
   1. Save your changes and exit by pressing `Ctrl`+`X`, then `y` to confirm.

### Install Raspotify

Follow the [Raspotify instructions](https://github.com/dtcooper/raspotify?tab=readme-ov-file#installation) to install it.

```sh
curl -sL https://dtcooper.github.io/raspotify/install.sh | sh
```

By default, the user running Raspotify is not in the audio group.

1. Check who is running `librespot` (the underlying Raspotify library) with: `ps -o uname -p $(pgrep librespot)`. In my case, the user is `raspotify`.
1. Then add that user to the `audio` group: `usermod -aG audio raspotify`.
1. Optionally, edit the config file, `/etc/raspotify/conf`.
1. Reload Raspotify: `service raspotify restart`.

**🎉 Woohoo, you made it! You should now be able to play music 🎉**

## Troubleshooting

If everything went to plan then you wouldn't be reading this. But it's never that easy, is it?

### Volume too low?

Run `alsamixer` and then use the arrow keys to adjust the system volume. The default volue is 50%.

<blog-img src="alsamixer.png" alt="Screenshot of AlsaMixer">
  Change the system volume using AlsaMixer. 
</blog-img>

Still too low? Change the `LIBRESPOT_NORMALISATION_PREGAIN` option in `/etc/raspotify/conf` to a larger number.

### Helpful commands

A few bonus commands:

- `aplay -l`: lists all hardware devices handled by ALSA.
- `librespot --device ?`: lists devices with their supported format and sample rates.
- `speaker-test -twav -c6`: plays a not-deafening sound on the default ALSA device.
