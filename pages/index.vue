<template>
  <div class="m-container">
    <div class="m-page m-flex-column">
      <div class="m-flex-spacer" style="max-height: 20vw" />
      <div class="m-small-caps text-h1 font-weight-regular mb-6 text-center">
        Matt Moran
      </div>
      <div class="m-subtitle-container">
        <v-icon v-ripple class="m-clickable text-h3">
          mdi-github
        </v-icon>
        <v-icon v-ripple class="m-clickable text-h3 mx-4">
          mdi-pencil-box-multiple
        </v-icon>
        <v-icon v-ripple class="m-clickable text-h3">
          mdi-linkedin
        </v-icon>
      </div>
      <div class="m-flex-spacer" />
    </div>
    <div class="m-between-pages m-flex-column text-center">
      <v-icon class="text-h3 m-clickable">
        mdi-menu-down
      </v-icon>
    </div>
    <div class="m-page m-flex-column">
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
    head: {
        title: "Matt Moran",
        titleTemplate: null,
    },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
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
