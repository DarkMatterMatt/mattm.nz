<template>
  <div class="my-8">
    <img
      :src="computedSrc"
      :alt="computedAlt"
    >
    <div v-if="this.$slots.default" class="text-caption text-center mb-2">
      <slot />
    </div>
  </div>
</template>

<script>
/* eslint-disable prefer-destructuring */
export default {
    props: {
        dir: { type: String, default: "" },
        src: { type: String, required: true },
        alt: { type: String, default: "" },
    },
    computed: {
        computedSrc () {
            let dir = this.dir;
            if (!dir) {
                // try fetch dir from parent info
                try {
                    dir = this.$parent.$props.document.dir;
                }
                catch (err) {}
            }
            if (!dir) {
                // backup, try fetch dir from ssrContext
                try {
                    dir = this.$ssrContext.url;
                }
                catch (err) {}
            }
            if (!dir) {
                // backup, try fetch dir from $parent.blog
                try {
                    dir = this.$parent.blog.dir;
                }
                catch (err) {}
            }

            if (!dir) {
                // throw new Error("Prop `dir` must be set if not in blog/post/index.md");
                return null;
            }
            // trim slashes cause Node can't handle double slashes in file names?
            dir = dir.replace(/^\/+|\/+$/g, "");
            return require(`~/content/${dir}/images/${this.src}`);
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
