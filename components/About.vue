<template>
  <div class="m-flex-column m-about">
    <div style="flex: 3 0 0" />
    <div class="m-small-caps text-h2 font-weight-regular mb-6 text-center">
      About Me
    </div>
    <v-list class="m-list" :width="this.$vuetify.breakpoint.mobile ? '90%' : '600'">
      <v-list-group
        v-for="item of items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.icon"
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
    <div style="flex: 4 0 0" />
  </div>
</template>

<script>
import items from "~/content/about/data.js";

export default {
    name: "About",
    props: {
        hideTooltips: Boolean,
    },
    data () {
        return { items };
    },
};
</script>

<style scoped>
.m-about {
  align-items: center;
}
</style>
