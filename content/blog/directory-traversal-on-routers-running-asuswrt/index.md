---
title: Directory traversal on Asus routers running AsusWRT before v3.0.0.4.385.20630
description: Directory traversal (path traversal) vulnerability allows unauthenticated access to images and file archives on the router and on attached external storage devices.
updatedAt: 2022-11-06
---

AsusWRT is a web-based interface for router configuration. All testing was performed on an Asus
RT-AC68U running AsusWRT v3.0.0.4.385.20433.

## Source code

Asus releases the source code for their router firmware under the GNU GPLv2. The following steps
describe how to download the latest source code.

1. Go to the router's page on the Asus website.
1. Navigate to the "Support" section for the router.
1. Click "Drivers & Tools".
1. Select "Others" for the operating system.
1. There should be a section for the source code. Some routers don't have this section (and others
   are very outdated), so you might need to search around.

## Directory traversal

The HTTP handling and routing is contained in `asuswrt\release\src\router\httpd\httpd.c`. The
request path validation looks like this.

```c
static void handle_request(void)
{
    char *path, *file;
    int len;

    /* Lots of code omitted for brevity. */

    if (path[0] != '/') {
        send_error(400, "Bad Request", (char*) 0, "Bad filename.");
        return;
    }
    file = &(path[1]);
    len = strlen(file);
    if (file[0] == '/' || strcmp(file, "..") == 0 || strncmp(file, "../", 3) == 0
            || strstr(file, "/../") != (char*) 0 || strcmp(&(file[len-3]), "/..") == 0) {
        send_error(400, "Bad Request", (char*) 0, "Illegal filename.");
        return;
    }
```

I couldn't figure out any way to get around this. It ensures that the `file` path does not begin at
the root directory and it can't contain `/../` anywhere in the path. I kept exploring the source
code and eventually found the following mistake.

```c
#define APPLYAPPSTR "applyapp.cgi"
#define GETAPPSTR "getapp"

static void handle_request(void)
{
    /* Path validation is here. */

    strncpy(url, file, sizeof(url) - 1);
    if (strncmp(url, APPLYAPPSTR, strlen(APPLYAPPSTR)) == 0) {
        fromapp = 1;
    }
    else if (strncmp(url, GETAPPSTR, strlen(GETAPPSTR)) == 0)  {
        fromapp = 1;
        strcpy(url, url + strlen(GETAPPSTR));
        file += strlen(GETAPPSTR);
    }
```

If the request path starts with `/getapp` then the `file` pointer will be moved six characters
forward. This means that a request to `https://192.168.1.1/getapp/file.zip` will be transformed into
`https://192.168.1.1//file.zip`, which serves the archive file located at `/file.zip`. The request
path validation is bypassed because the `getapp` file path prefix is removed after validation
occurs.

Due to further security checks, this vulnerability is limited to accessing files matching the
following patterns. Of particular note are the image and file archive patterns, which could let an
attacker view personal photos or system backups from external media devices connected to the router.

- Images: `*.gif`, `*.jpg`, `*.png`, `*.svg`
- File archives: `*.gz`, `*.tgz`, `*.zip`
- Other files: `*.css`, `*.htc`, `*.ipk`, `*.pac`, `*.pcap*`, `*.swf`

An authenticated attacker can also read files matching the following patterns. Not much point to
this since an authenticated attacker can enable and log in with SSH...

- Configuration files: `*.CFG`, `*.ovpn`
- Web: `*.asp*`, `*.htm*`, `*.js`
- Other files: `*.appcache`, `*.cab`, `*.json`, `*.xml`

## Disclosure timeline

- 2020-05-20: Found vulnerability.
- 2020-05-31: Reported to Asus.
- 2020-06-10: Reply from Asus confirming the report, included beta firmware containing a patch for
  the vulnerability.
- 2020-06-30: Firmware update with patch released (v3.0.0.4.385.20630).
- 2020-07: Added to Asus' [Hall of Fame](https://www.asus.com/content/asus-product-security-advisory/)
- 2022-11-06: Public disclosure.
