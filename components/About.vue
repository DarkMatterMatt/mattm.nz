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
export default {
    name: "About",
    props: {
        hideTooltips: Boolean,
    },
    data () {
        return {
            items: [{
                active: true,
                title: "Summary",
                icon: "mdi-account",
                subItems: [
                    "Fields of interest: cyber security & software development",
                ],
            }, {
                title: "Work Experience",
                icon: "mdi-briefcase",
                subItems: [
                    "Summer 2020/2021. Security Intern at Aura Information Security",
                    "Summer 2019/2020. Security Intern at Aura Information Security",
                ],
            }, {
                title: "Education",
                icon: "mdi-school",
                subItems: [
                    "Currently studying Software Engineering at the University of Auckland",
                    "Available to begin graduate roles from Jan 2023",
                    "A+ GPA (2019 & 2020 Dean's Honours list)",
                    "2020 Dean's Leadership Programme",
                ],
            }],
        };
    },
};
</script>

<style scoped>
.m-about {
  align-items: center;
}
</style>
