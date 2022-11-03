<template>
  <home-about initial-page="About" />
</template>

<script>
import { createMetaTags } from "~/util/metaTags";

export default {
    name: "About",
    layout: "minimal",
    head: {
        title: "Matt Moran",
        titleTemplate: "%s",
        meta: createMetaTags({
            url: "/about",
            type: "website",
            title: "Matt Moran",
            description: "Matt Moran.",
        }),
    },
};
</script>
