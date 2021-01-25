<template>
  <article class="m-flex-column" style="height: 100%">
    <nuxt-content :document="article" />
    <div class="m-flex-spacer" />
    <div class="text-body-2 mt-1">
      Last updated: {{ article.updatedAt }}
    </div>
  </article>
</template>

<script>
export default {
    async asyncData ({ $content, params }) {
        const article = await $content("articles", params.slug).fetch();

        return { article };
    },
    head () {
        return {
            title: this.article.title,
        };
    },
    mounted () {
        this.$store.commit("layout/updateTitle", "Blog");
    },
};
</script>
