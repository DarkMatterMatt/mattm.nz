<template>
  <div>
    <NuxtLink
      v-for="article of articles"
      :key="article.slug"
      :to="{ name: 'blog-slug', params: { slug: article.slug } }"
      class="m-no-decoration"
    >
      <v-card class="mb-3">
        <v-img v-if="article.img" :src="article.img" height="20vh" />
        <v-card-title v-text="article.title" />
        <v-card-text v-text="article.description" />
      </v-card>
    </NuxtLink>
  </div>
</template>

<script>
export default {
    name: "Blog",
    async asyncData ({ $content, params }) {
        const articles = await $content("articles", params.slug)
            .only(["title", "description", "img", "slug", "author"])
            .sortBy("createdAt", "asc")
            .fetch();

        return {
            articles,
        };
    },
    head: {
        title: "Blog",
    },
    mounted () {
      this.$store.commit("layout/updateTitle", "Blog");
    },
};
</script>
