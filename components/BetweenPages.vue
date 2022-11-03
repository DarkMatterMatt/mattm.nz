<template>
  <div class="m-flex-column text-center">
    <v-tooltip :top="isPage1" :bottom="isPage2" :disabled="hideTooltips" :nudge-top="isPage1 ? -8 : 8">
      <template #activator="{ on }">
        <a
          href="#"
          :aria-label="`Scroll to ${otherPage} page`"
          class="m-no-decoration"
          v-on="on"
          @click.prevent="onPageJumpClick"
        >
          <v-icon v-ripple class="m-clickable m-rotate m-reverse text-h3 mx-4">
            mdi-menu-down
          </v-icon>
        </a>
      </template>
      <span v-text="otherPage" />
    </v-tooltip>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class BetweenPages extends Vue {
    @Prop({ default: false }) readonly hideTooltips!: boolean;
    @Prop({ type: String, required: true }) readonly currentPage!: string;
    @Prop({ type: String, required: true }) readonly afterPage!: string;
    @Prop({ type: String, required: true }) readonly beforePage!: string;
    @Prop({ type: Function, required: true }) readonly scrollToPage!: (page: string) => void;

    get isPage1 () {
        return this.currentPage !== this.afterPage;
    }

    get isPage2 () {
        return !this.isPage1;
    }

    get otherPage () {
        return this.isPage1 ? this.afterPage : this.beforePage;
    }

    onPageJumpClick () {
        this.scrollToPage(this.otherPage);
    }
}
</script>
