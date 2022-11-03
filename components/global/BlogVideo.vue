<template>
  <div class="my-8">
    <video
      :autoplay="computedAutoplay"
      :controls="computedControls"
      :loop="computedLoop"
      :muted="computedMuted"
      :playsinline="computedPlaysInline"
    >
      <source v-for="s of sources" :key="s.src" :src="s.src" :type="s.type">
      Download <a
        :href="fallback"
        :v-text="fallback.split('/').at(-1)"
        :aria-label="`Download ${fallback.split('/').at(-1)}`"
      /> to view it.
    </video>
    <div v-if="$slots.default" class="text-caption text-center mb-2">
      <slot />
    </div>
  </div>
</template>

<script>
import { getContentVideoSources } from "~/util/getContentMediaSrc";

/* eslint-disable prefer-destructuring */
export default {
    props: {
        dir: { type: String, default: "" },
        src: { type: String, required: true },
        alt: { type: String, default: "" },
        emulateGif: { type: Boolean, default: false },
        autoplay: { type: Boolean, default: undefined },
        controls: { type: Boolean, default: undefined },
        loop: { type: Boolean, default: undefined },
        muted: { type: Boolean, default: undefined },
        playsinline: { type: Boolean, default: undefined },
    },
    computed: {
        sources () {
            return getContentVideoSources(this);
        },
        fallback () {
            return this.sources.at(-1).src;
        },
        computedAutoplay () {
            return this.autoplay ?? this.emulateGif;
        },
        computedControls () {
            return this.controls ?? !this.emulateGif;
        },
        computedLoop () {
            return this.loop ?? this.emulateGif;
        },
        computedMuted () {
            return this.muted ?? true;
        },
        computedPlaysInline () {
            return this.playsinline ?? true;
        },
    },
};
</script>

<style scoped>
video {
    max-width: 100%;
}
</style>
