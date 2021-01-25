<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
    async asyncData ({ $content, params }) {
        const article = await $content("articles", params.slug).fetch();

        return { article };
    },
    head() {
      return {
        title: this.article.title,
      }
    },
    mounted () {
      this.$store.commit("layout/updateTitle", "Blog");
    },
};
</script>
