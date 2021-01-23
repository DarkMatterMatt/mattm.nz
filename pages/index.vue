<template>
  <div class="m-container">
    <div class="m-page m-flex-column">
      <div class="m-flex-spacer" style="max-height: 20vw" />
      <div class="m-small-caps text-h1 font-weight-regular mb-6 text-center">
        Matt Moran
      </div>
      <div class="m-subtitle-container">
        <v-tooltip bottom :disabled="hideTooltips" attach="#link-github">
          <template #activator="{ on }">
            <a :href="links.github" id="link-github" class="m-no-decoration" v-on="on">
              <v-icon v-ripple class="m-clickable text-h3"> mdi-github </v-icon>
            </a>
          </template>
          <span>GitHub</span>
        </v-tooltip>
        <v-tooltip bottom :disabled="hideTooltips" attach="#link-blog">
          <template #activator="{ on }">
            <NuxtLink :to="links.blog" id="link-blog" class="m-no-decoration">
              <v-icon v-ripple class="m-clickable text-h3 mx-4" v-on="on">
                mdi-pencil-box-multiple
              </v-icon>
            </NuxtLink>
          </template>
          <span>Blog</span>
        </v-tooltip>
        <v-tooltip bottom :disabled="hideTooltips" attach="#link-linkedin">
          <template #activator="{ on }">
            <a :href="links.linkedin" id="link-linkedin" class="m-no-decoration" v-on="on">
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
      <v-tooltip top :disabled="hideTooltips" attach="#link-about">
        <template #activator="{ on }">
          <NuxtLink :to="links.about" replace id="link-about" class="m-no-decoration" @click.native="scrollToHash">
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
      <v-list class="m-list" :width="this.$vuetify.breakpoint.mobile ? '90%' : '600'">
        <v-list-group
          v-for="(item, i) of about.items"
          :key="i"
          v-model="item.active"
          :prepend-icon="item.icon"
          class="white--text"
        >
          <template #activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </template>
          <v-list dense>
            <v-list-item v-for="text of item.subItems" :key="text">
              <v-list-item-content v-text="text" />
            </v-list-item>
          </v-list>
        </v-list-group>
      </v-list>
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
            about: {
                items: [{
                    active: true,
                    title: "Summary",
                    icon: "mdi-account",
                    subItems: [
                        "Fields of interest: cyber security & software development",
                    ],
                }, {
                    title: "Work Experience",
                    icon: "mdi-briefcase",
                    subItems: [
                        "Summer 2019/2020. Security Intern at Aura Information Security",
                        "Summer 2020/2021. Security Intern at Aura Information Security",
                    ],
                }, {
                    title: "Education",
                    icon: "mdi-school",
                    subItems: [
                        "Currently studying Software Engineering at the University of Auckland",
                        "Available to begin graduate roles from Jan 2023",
                        "A+ GPA (2019 & 2020 Dean's Honours list)",
                        "2019 Dean's Leadership Programme",
                    ],
                }],
            },
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

#about {
  align-items: center;
}

.m-list {
  background-color: transparent;
}
</style>
