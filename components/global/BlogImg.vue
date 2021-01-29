<template>
  <v-img
    :src="computedSrc"
    :alt="computedAlt"
  />
</template>

<script>
export default {
    props: {
        dir: { type: String, default: "" },
        src: { type: String, required: true },
        alt: { type: String, default: "" },
    },
    computed: {
        computedSrc () {
            try {
                if (!this.dir && !this.$parent.$props.document.dir) {
                  throw new Error("Prop `dir` must be set if not in blog/post/index.md");
                }
                const dir = this.dir || this.$parent.$props.document.dir;
                return require(`~/content${dir}/images/${this.src}`);
            }
            catch (err) {
                return null;
            }
        },
        computedAlt () {
            return this.alt || this.src;
        },
    },
};
</script>
