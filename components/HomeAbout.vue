<template>
  <div v-scroll.self="onScroll" class="m-container">
    <home class="m-page" data-page="Home" style="padding-top: 10%" :hide-tooltips="hideTooltips" />
    <between-pages
      class="m-between-pages"
      :current-page="currentPage"
      after-page="About"
      before-page="Home"
      :hide-tooltips="hideTooltips"
      :scroll-to-page="scrollToPage"
    />
    <about class="m-page" data-page="About" style="padding-bottom: 10%" :hide-tooltips="hideTooltips" />
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
            currentPage: "home",
            scrollFinishedTimeout: null,
            pages: {
                Home: { url: "/" },
                About: { url: "/about/" },
            },
        };
    },
    mounted () {
        if (this.initialPage) {
            this.scrollToPage(this.initialPage);
        }
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

            // TODO: handle more than two pages, handle more than one .m-rotate
            const scrollPercent = this.$el.scrollTop / (this.$el.scrollHeight - this.$el.clientHeight);
            this.$el.querySelector(".m-rotate").style.setProperty("--rotate", scrollPercent * 1.5);

            this.hideTooltips = true;
        },
        onScrollFinish () {
            this.hideTooltips = false;
            const page = this.findMostTopPage();
            this.currentPage = page.getAttribute("data-page");
            this.updateURL(this.currentPage);
        },
        updateURL (page) {
            if (!page || !Object.prototype.hasOwnProperty.call(this.pages, page)) {
                return;
            }
            if (!window.history || !window.history.replaceState) {
                // do nothing on ancient browsers :(
                return;
            }
            const path = this.pages[page].url;
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
