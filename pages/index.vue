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
            <a :href="links.github" class="m-no-decoration" v-on="on">
              <v-icon v-ripple class="m-clickable text-h3"> mdi-github </v-icon>
            </a>
          </template>
          <span>GitHub</span>
        </v-tooltip>
        <v-tooltip bottom :disabled="hideTooltips">
          <template #activator="{ on }">
            <NuxtLink :to="links.blog" class="m-no-decoration">
              <v-icon v-ripple class="m-clickable text-h3 mx-4" v-on="on">
                mdi-pencil-box-multiple
              </v-icon>
            </NuxtLink>
          </template>
          <span>Blog</span>
        </v-tooltip>
        <v-tooltip bottom :disabled="hideTooltips">
          <template #activator="{ on }">
            <a :href="links.linkedin" class="m-no-decoration" v-on="on">
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
          <NuxtLink :to="links.about" replace class="m-no-decoration" @click.native="scrollToHash">
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
            links: {
                about: "#about",
                blog: "/blog",
                github: "//github.com/DarkMatterMatt",
                linkedin: "//linkedin.com/in/matt-moran-a0b74318b/",
            },
            hideTooltips: false,
        };
    },
    head: {
        title: "Matt Moran",
        titleTemplate: null,
    },
    mounted () {
        this.scrollToHash();

        let scrollFinishedTimeout;
        this.$el.addEventListener("scroll", () => {
            this.onScroll();
            clearTimeout(scrollFinishedTimeout);
            scrollFinishedTimeout = setTimeout(() => this.onScrollFinish(), 100);
        });
    },
    methods: {
        scrollToHash () {
            if (this.$route.hash) {
                const anchor = document.querySelector(this.$route.hash);
                if (anchor) {
                    anchor.scrollIntoView();
                }
            }
        },
        onScroll () {
            this.hideTooltips = true;
        },
        onScrollFinish () {
            this.hideTooltips = false;
            const page = this.findMostTopPage();
            this.changeHash((page && page.id) || "");
        },
        changeHash (newHash) {
            if (!newHash.startsWith("#")) {
                newHash = `#${newHash}`;
            }
            if (newHash === "#") {
                newHash = "";
            }
            if (this.$route.hash !== newHash) {
                this.$router.replace(newHash);
            }
        },
        findMostTopPage () {
            let mostTopPage = null;
            let leastDistanceToTop = Infinity;
            for (const page of this.$el.getElementsByClassName("m-page")) {
                const rect = page.getBoundingClientRect();
                const distanceToTop = Math.abs(rect.y);
                if (distanceToTop < leastDistanceToTop) {
                    mostTopPage = page;
                    leastDistanceToTop = distanceToTop;
                }
            }
            return mostTopPage;
        },
    },
};
</script>

<style scoped>
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
