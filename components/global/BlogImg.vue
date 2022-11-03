<template>
  <div class="my-8">
    <img
      :src="computedSrc"
      :alt="computedAlt"
    >
    <div v-if="$slots.default" class="text-caption text-center mb-2">
      <slot />
    </div>
  </div>
</template>

<script>
import { getContentImageSrc } from "~/util/getContentMediaSrc";

/* eslint-disable prefer-destructuring */
export default {
    props: {
        dir: { type: String, default: "" },
        src: { type: String, required: true },
        alt: { type: String, default: "" },
    },
    computed: {
        computedSrc () {
            return getContentImageSrc(this);
        },
        computedAlt () {
            return this.alt || this.src;
        },
    },
};
</script>

<style scoped>
img {
    max-width: 100%;
}
</style>
