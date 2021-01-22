<template>
  <v-app dark>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<style>
::-webkit-scrollbar {
  display: none;
}

.m-no-decoration {
  text-decoration: none;
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
</style>
