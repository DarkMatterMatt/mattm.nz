<template>
  <v-app dark>
    <v-navigation-drawer v-if="isMobile()" v-model="drawer" app>
      <v-list>
        <v-list-item to="/" router exact>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              Matt Moran
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="item of menu"
          :key="item.name"
          :to="item.link"
          router
        >
          <v-list-item-action>
            <v-icon v-text="item.icon" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar v-if="isMobile()" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="pl-2" v-text="currentRouteName" />
    </v-app-bar>

    <v-app-bar v-if="!isMobile()" app>
      <NuxtLink to="/" class="m-no-decoration">
        <v-toolbar-title>Matt Moran</v-toolbar-title>
      </NuxtLink>
      <v-spacer />
      <v-btn v-for="item of menu" :key="item.name" :to="item.link">
        <v-icon left v-text="item.icon" />
        {{ item.name }}
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container style="height: 100%">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
    data () {
        return {
            menu: [
                { name: "Blog", icon: "mdi-pencil-box-multiple", link: "/blog" },
                { name: "Projects", icon: "mdi-puzzle", link: "/projects" },
                { name: "About", icon: "mdi-account", link: "/about" },
            ],
            drawer: false,
        };
    },
    computed: {
        currentRouteName () {
            return this.$store.state.layout.title;
        },
    },
    methods: {
        isMobile () {
            return this.$vuetify.breakpoint.mobile;
        },
    },
};
</script>
