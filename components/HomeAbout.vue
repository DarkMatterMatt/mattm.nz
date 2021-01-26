<template>
  <div class="m-container">
    <home class="m-page" data-page="home" style="padding-top: 10%" :hide-tooltips="hideTooltips" />
    <div class="m-between-pages m-flex-column text-center">
      <v-tooltip top :disabled="hideTooltips" attach="#link-about">
        <template #activator="{ on }">
          <a id="link-about" class="m-no-decoration" v-on="on" @click.prevent="scrollToPage('about')">
            <v-icon v-ripple class="m-clickable text-h3 mx-4">
              mdi-menu-down
            </v-icon>
          </a>
        </template>
        <span>About</span>
      </v-tooltip>
    </div>
    <about class="m-page" data-page="about" style="padding-bottom: 10%" :hide-tooltips="hideTooltips" />
  </div>
</template>

<script>
export default {
    name: "HomeAbout",
    props: {
        initialPage: { type: String, default: "" },
    },
    data () {
        return {
            hideTooltips: false,
            scrollFinishedTimeout: null,
            pageURLs: {
                home: "/",
                about: "/about/",
            },
        };
    },
    mounted () {
        this.$el.addEventListener("scroll", this.onScroll);
        if (this.initialPage) {
            this.scrollToPage(this.initialPage);
        }
    },
    unmounted () {
        this.$el.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        scrollToPage (page) {
            const anchor = document.querySelector(`*[data-page='${page}'`);
            if (anchor) {
                this.$el.scroll(0, anchor.offsetTop);
                // anchor.scrollIntoView(); // doesn't work...
            }
        },
        onScroll () {
            clearTimeout(this.scrollFinishedTimeout);
            this.scrollFinishedTimeout = setTimeout(() => this.onScrollFinish(), 50);

            this.hideTooltips = true;
        },
        onScrollFinish () {
            this.hideTooltips = false;
            const page = this.findMostTopPage();
            this.updateURL((page && page.getAttribute("data-page")) || "");
        },
        updateURL (page) {
            if (!page || !Object.prototype.hasOwnProperty.call(this.pageURLs, page)) {
                return;
            }
            if (!window.history || !window.history.replaceState) {
                // do nothing on ancient browsers :(
                return;
            }
            const path = this.pageURLs[page];
            if (window.location.pathname !== path) {
                window.history.replaceState({}, page, path);
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
</style>
