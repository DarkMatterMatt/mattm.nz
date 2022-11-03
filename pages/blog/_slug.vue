<template>
  <div class="m-flex-column m-reading-width" style="height: 100%">
    <h1 v-text="blog.title" />
    <div v-if="blog.description">
      <p v-text="blog.description" />
      <hr class="mb-4">
    </div>

    <nuxt-content :document="blog" />

    <div class="m-flex-spacer" />
    <br>
    <div class="text-body-2 mt-1">
      Last updated: {{ blog.updatedAt | formatDate }}
    </div>
  </div>
</template>

<script>
import { createMetaTags } from "~/util/metaTags";

export default {
    async asyncData ({ $content, params }) {
        const [blog] = await $content("blog", { deep: true })
            .where({ dir: `/blog/${params.slug}` })
            .fetch();

        return { blog };
    },
    head () {
        return {
            title: this.blog.title,
            meta: createMetaTags({
                url: this.$route.fullPath,
                type: "article",
                title: this.blog.title,
                description: this.blog.description,
                image: this.blog.image,
                card: this.blog.card,
                modifiedDateTime: this.blog.updatedAt,
            }),
        };
    },
    mounted () {
        this.$store.commit("layout/updateTitle", "Blog");
    },
};
</script>
