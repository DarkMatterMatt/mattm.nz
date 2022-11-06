<template>
  <div class="m-reading-width">
    <a
      v-for="project of projects"
      :key="project.link"
      :href="project.link"
      class="m-no-decoration"
    >
      <v-card class="mb-3">
        <v-img v-if="project.img" :src="project.img" height="20vh" />
        <v-card-title style="word-break: break-word" v-text="project.title" />
        <v-card-text v-text="project.description" />
      </v-card>
    </a>
  </div>
</template>

<script>
import { getContentMedia } from "~/util/getContentMediaSrc";
import { createMetaTags } from "~/util/metaTags";

const resolveImage = data => ({
    ...data,
    img: (!data.img || data.img.includes("//")) ? data.img : getContentMedia(data.dir, data.img),
});

export default {
    name: "Projects",
    async asyncData ({ $content }) {
        const projects = await $content("projects", { deep: true })
            .only(["title", "description", "img", "link", "author", "dir"])
            .sortBy("updatedAt", "desc")
            .fetch();

        return {
            projects: projects.map(resolveImage),
        };
    },
    head: {
        title: "Projects",
        meta: createMetaTags({
            url: "/projects",
            type: "website",
            title: "Projects",
            description: "Matt Moran's personal projects.",
            image: require("~/content/projects/projects.png"),
        }),
    },
    mounted () {
        this.$store.commit("layout/updateTitle", "Projects");
    },
};
</script>
