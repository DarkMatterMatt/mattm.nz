<template>
  <VueScrollSnap :fullscreen="true">
    <div class="item">
      <div class="m-container">
        <div class="m-spacer" style="max-height: 20vw" />
        <div class="m-title m-small-caps text-h1 font-weight-regular mb-6 text-center">
          Matt Moran
        </div>
        <div class="m-subtitle-container">
          <v-icon v-ripple class="m-subtitle-icon">
            mdi-github
          </v-icon>
          <v-icon v-ripple class="m-subtitle-icon mx-4">
            mdi-pencil-box-multiple
          </v-icon>
          <v-icon v-ripple class="m-subtitle-icon">
            mdi-linkedin
          </v-icon>
        </div>
        <div class="m-spacer" />
        <v-icon class="text-h3">
          mdi-menu-down
        </v-icon>
      </div>
    </div>
    <div id="two" class="item">
      <div class="m-container">
        <v-icon class="text-h3">
          mdi-menu-up
        </v-icon>
        <div class="m-spacer" style="max-height: 20vw" />
        <div class="m-title m-small-caps text-h2 font-weight-regular mb-6 text-center">
          About Me
        </div>
        <div />
        <div class="m-spacer" />
      </div>
    </div>
  </VueScrollSnap>
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
.m-small-caps {
  font-variant: small-caps;
}

.m-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.m-subtitle-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.m-subtitle-icon {
  font-size: 48px;
  cursor: pointer;
}

.m-subtitle-icon:hover {
  opacity: 0.7;
}

.m-spacer {
  flex: 1 1 0;
}
</style>
