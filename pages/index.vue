<template>
  <home-about initial-page="Home" />
</template>

<script>
import { createMetaTags } from "~/util/metaTags";

export default {
    name: "Index",
    layout: "minimal",
    head: {
        title: "Matt Moran",
        titleTemplate: "%s",
        meta: createMetaTags({
            url: "/",
            type: "website",
            title: "Matt Moran",
            description: "Matt Moran's personal website.",
            image: require("~/content/home/home.png"),
        }),
    },
};
</script>
