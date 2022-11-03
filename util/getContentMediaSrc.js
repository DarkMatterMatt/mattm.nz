/* eslint-disable prefer-destructuring */

function getDirFromComponent (component) {
    let dir = component.dir;
    if (!dir) {
        // try fetch dir from parent info
        try {
            dir = component.$parent.$props.document.dir;
        }
        catch (err) {}
    }
    if (!dir) {
        // backup, try fetch dir from ssrContext
        try {
            dir = component.$ssrContext.url;
        }
        catch (err) {}
    }
    if (!dir) {
        // backup, try fetch dir from $parent.blog
        try {
            dir = component.$parent.blog.dir;
        }
        catch (err) {}
    }

    if (!dir) {
        throw new Error("Prop `dir` must be set if not in blog/post/index.md");
    }
    return dir;
}

export function getContentMedia (dir, name) {
    // trim slashes cause Node can't handle double slashes in file names?
    dir = dir.replace(/^\/+|\/+$/g, "");
    return require(`~/content/${dir}/media/${name}`);
}

export function getContentImageSrc (component) {
    const dir = getDirFromComponent(component);
    return getContentMedia(dir, component.src);
}

export function getContentVideoSources (component) {
    if (!/\.mp4$/.test(component.src)) {
        throw new Error("Video must be an mp4 file.");
    }

    const dir = getDirFromComponent(component);

    const mp4 = getContentMedia(dir, component.src);
    try {
        const webm = getContentMedia(dir, component.src.replace(/\.mp4$/, ".webm"));
        return [
            { src: webm, type: "video/webm" },
            { src: mp4, type: "video/mp4" },
        ];
    }
    catch (err) {
        return [
            { src: mp4, type: "video/mp4" },
        ];
    }
}
