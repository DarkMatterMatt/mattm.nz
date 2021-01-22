<template>
  <div class="m-container">
    <div class="m-page m-flex-column">
      <div class="m-flex-spacer" style="max-height: 20vw" />
      <div class="m-small-caps text-h1 font-weight-regular mb-6 text-center">
        Matt Moran
      </div>
      <div class="m-subtitle-container">
        <v-tooltip bottom :disabled="hideTooltips">
          <template #activator="{ on }">
            <a :href="github" class="m-no-decoration" v-on="on">
              <v-icon v-ripple class="m-clickable text-h3"> mdi-github </v-icon>
            </a>
          </template>
          <span>GitHub</span>
        </v-tooltip>
        <v-tooltip bottom :disabled="hideTooltips">
          <template #activator="{ on }">
            <NuxtLink to="/blog" class="m-no-decoration">
              <v-icon v-ripple class="m-clickable text-h3 mx-4" v-on="on">
                mdi-pencil-box-multiple
              </v-icon>
            </NuxtLink>
          </template>
          <span>Blog</span>
        </v-tooltip>
        <v-tooltip bottom :disabled="hideTooltips">
          <template #activator="{ on }">
            <a :href="linkedin" class="m-no-decoration" v-on="on">
              <v-icon v-ripple class="m-clickable text-h3">
                mdi-linkedin
              </v-icon>
            </a>
          </template>
          <span>LinkedIn</span>
        </v-tooltip>
      </div>
      <div class="m-flex-spacer" />
    </div>
    <div class="m-between-pages m-flex-column text-center">
      <v-tooltip top :disabled="hideTooltips">
        <template #activator="{ on }">
          <NuxtLink :to="about" class="m-no-decoration" @click.native="scrollToHash">
            <v-icon v-ripple class="m-clickable text-h3 mx-4" v-on="on">
              mdi-menu-down
            </v-icon>
          </NuxtLink>
        </template>
        <span>About</span>
      </v-tooltip>
    </div>
    <div id="about" class="m-page m-flex-column">
      <div class="m-flex-spacer" style="max-height: 20vw" />
      <div class="m-small-caps text-h2 font-weight-regular mb-6 text-center">
        About Me
      </div>
      <div />
      <div class="m-flex-spacer" />
    </div>
  </div>
</template>

<script>
export default {
    name: "Index",
    data () {
        return {
            about: "#about",
            blog: "/blog",
            github: "//github.com/DarkMatterMatt",
            linkedin: "//linkedin.com/in/matt-moran-a0b74318b/",
            hideTooltips: false,
        };
    },
    head: {
        title: "Matt Moran",
        titleTemplate: null,
    },
    mounted () {
        this.scrollToHash();
    },
    methods: {
        scrollToHash () {
            if (this.$route.hash) {
                const anchor = document.querySelector(this.$route.hash);
                if (anchor) {
                    anchor.scrollIntoView();
                    this.hideTooltips = true;
                    this.$nextTick(() => this.hideTooltips = false);
                }
            }
        },
    },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.m-no-decoration {
  text-decoration: none;
}

.m-small-caps {
  font-variant: small-caps;
}

.m-clickable {
  cursor: pointer;
}

.m-clickable:hover {
  opacity: 0.7;
}

.m-flex-column {
  display: flex;
  flex-direction: column;
}

.m-flex-spacer {
  flex: 1 1 0;
}

.m-container {
  position: fixed;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
}

.m-page {
  height: 90%;
  width: 100%;
  scroll-snap-align: start;
}

.m-between-pages {
  justify-content: center;
  height: 10%;
  width: 100%;
}

.m-subtitle-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
