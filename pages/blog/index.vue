<template>
    <v-list three-line>
      <template v-for="(article, i) of articles">
        <v-divider v-if="i !== 0" :key="i" />
        <NuxtLink
          :key="article.slug"
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="m-no-decoration"
        >
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="article.img" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="article.title" />
              <v-list-item-subtitle v-text="article.description" />
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>
      </template>
    </v-list>
</template>

<script>
export default {
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
    name: "Blog",
};
</script>
