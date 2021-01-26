<template>
  <div class="m-flex-column">
    <div style="flex: 3 0 0" />
    <div class="m-small-caps text-h1 font-weight-regular mb-6 text-center">
      Matt Moran
    </div>
    <div class="m-subtitle-container">
      <v-tooltip bottom :disabled="hideTooltips" attach="#link-github">
        <template #activator="{ on }">
          <a id="link-github" :href="links.github" class="m-no-decoration" v-on="on">
            <v-icon v-ripple class="m-clickable text-h3"> mdi-github </v-icon>
          </a>
        </template>
        <span>GitHub</span>
      </v-tooltip>
      <v-tooltip bottom :disabled="hideTooltips" attach="#link-blog">
        <template #activator="{ on }">
          <NuxtLink id="link-blog" :to="links.blog" class="m-no-decoration">
            <v-icon v-ripple class="m-clickable text-h3 mx-4" v-on="on">
              mdi-pencil-box-multiple
            </v-icon>
          </NuxtLink>
        </template>
        <span>Blog</span>
      </v-tooltip>
      <v-tooltip bottom :disabled="hideTooltips" attach="#link-linkedin">
        <template #activator="{ on }">
          <a id="link-linkedin" :href="links.linkedin" class="m-no-decoration" v-on="on">
            <v-icon v-ripple class="m-clickable text-h3">
              mdi-linkedin
            </v-icon>
          </a>
        </template>
        <span>LinkedIn</span>
      </v-tooltip>
    </div>
    <div style="flex: 4 0 0" />
  </div>
</template>

<script>
export default {
    name: "Home",
    props: {
        hideTooltips: Boolean,
    },
    data () {
        return {
            links: {
                about: "#about",
                blog: "/blog",
                github: "//github.com/DarkMatterMatt",
                linkedin: "//linkedin.com/in/matt-moran-a0b74318b/",
            },
        };
    },
};
</script>

<style scoped>
.m-subtitle-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
