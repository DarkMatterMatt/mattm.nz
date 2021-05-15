---
title: Discord embed spoofing
description: Vulnerability in Discord client URL parsing makes custom embed content appear to come from a legitimate domain
updatedAt: 2020-03-02T00:00:01+13:00
---

**TLDR:** I found a vulnerability in the way the Discord clients parse URLs which makes my custom
embed content appear to come from a legitimate domain. The message `https://discord.gg%2ek.vu` will
show an embed from `https://discord.gg.k.vu` but display as `https://discord.gg/%2ek.vu`

<blog-hr />

Discord uses Node’s `url.parse()` function to process URLs in messages. Node’s parser expects to
receive a URL which has already had its percent encoding decoded into special characters. Discord’s
web and desktop clients forget to do this and instead attempt to parse the raw user input.

A `%` symbol is never allowed in a hostname ([ietf.org/rfc/rfc2396.html#section-3.2.2](ietf.org/rfc/rfc2396.html#section-3.2.2))
so the parser considers the hostname as the text before the `%`. This results in the server (which
decodes the `%2e` to a `.`) and the client seeing different URLs.

```js
// node parseUrl.js 'https://discord.gg%2ek.vu'
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'discord.gg',
  port: null,
  hostname: 'discord.gg',
  hash: null,
  search: null,
  query: null,
  pathname: '%2ek.vu',
  path: '%2ek.vu',
  href: 'https://discord.gg/%2ek.vu'
}
```

The server which loads the embed content acts the same way as a normal web browser and decodes the
`%2e` before loading the embed from `https://discord.gg.k.vu`. The desktop and web clients
incorrectly parse the URL and display it as `https://discord.gg/%2ek.vu`, suggesting that the URL
came from `discord.gg`.

<blog-img src="discord_1.png">
  It’s from discord.gg, right?
</blog-img>

This vulnerability can be used for much more realistic phishing attacks as the blue text that the
user is clicking is different to the website that it links to. For example, clicking “Join the
Official Fortnite Discord Server!” in the image below sends the victim to a cloned Discord login
page. The user has just seen the `discord.gg` URL so they are unlikely to be suspicious of the login
page.

<blog-img src="discord_2.png">
  Phishing potential: clicking on the link in the embed will take you to my domain
</blog-img>

<blog-hr />

I contacted Discord security about this vulnerability and they claim that it is not a security
vulnerability as “there is no guarantee the link in a message matches the link in the title.” As
such, there is no patch available and all desktop and web clients are currently vulnerable. Mobile
devices do not display the deceiving slash.
