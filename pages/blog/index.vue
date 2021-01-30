<template>
  <div class="m-reading-width">
    <NuxtLink
      v-for="article of articles"
      :key="article.dir"
      :to="article.dir"
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
    async asyncData ({ $content }) {
        const articles = await $content("blog", { deep: true })
            .only(["title", "description", "img", "slug", "author", "dir"])
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
