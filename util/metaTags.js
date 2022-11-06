export function createMetaTags ({ url, type, title, description, image, card, modifiedDateTime }) {
    for (const [k, v] of Object.entries({ url, type, title, description, image })) {
        if (!v) {
            throw new Error(`Missing required parameter: ${k}`);
        }
    }
    if (!url.includes("://")) {
        url = process.env.HOSTNAME + url;
    }
    if (!image.includes("://")) {
        image = process.env.HOSTNAME + image;
    }

    return [
        { name: "title", content: title },
        { name: "description", content: description },
        { name: "article:modified_time", content: modifiedDateTime },
        { property: "og:url", content: url },
        { property: "og:type", content: type },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: image },
        { name: "twitter:card", content: card },
        { name: "twitter:url", content: url },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
    ]
        .filter(({ content }) => content)
        .map(x => ({ hid: x.name || x.property, ...x }));
}
