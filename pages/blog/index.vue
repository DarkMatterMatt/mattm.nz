<template>
  <div class="m-reading-width">
    <NuxtLink
      v-for="article of articles"
      :key="article.dir"
      :to="article.dir"
      class="m-no-decoration"
    >
      <v-card class="mb-3">
        <div v-if="article.img" style="position: relative; padding: 16px 16px 0 16px">
          <div style="position: relative">
            <v-img :src="article.img" contain />
          </div>
        </div>
        <v-card-title style="word-break: break-word" v-text="article.title" />
        <v-card-text v-text="article.description" />
      </v-card>
    </NuxtLink>
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
    name: "Blog",
    async asyncData ({ $content }) {
        const articles = await $content("blog", { deep: true })
            .only(["title", "description", "img", "slug", "author", "dir"])
            .sortBy("updatedAt", "desc")
            .fetch();

        return {
            articles: articles.map(resolveImage),
        };
    },
    head: {
        title: "Blog",
        meta: createMetaTags({
            url: "/blog",
            type: "website",
            title: "Blog",
            description: "A collection of Matt Moran's articles about web development and other topics.",
            image: require("~/content/blog/blog.png"),
        }),
    },
    mounted () {
        this.$store.commit("layout/updateTitle", "Blog");
    },
};
</script>

<style scoped>
.imgContainer {
    width: 100%;
    min-height: 20vmin;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
