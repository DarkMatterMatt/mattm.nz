<template>
  <article class="m-flex-column m-reading-width" style="height: 100%">
    <nuxt-content :document="blog" />
    <div class="m-flex-spacer" />
    <div class="text-body-2 mt-1">
      Last updated: {{ blog.updatedAt }}
    </div>
  </article>
</template>

<script>
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
        };
    },
    mounted () {
        this.$store.commit("layout/updateTitle", "Blog");
    },
};
</script>
