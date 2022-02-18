<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
      @click-outside="$emit('outside-click')"
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
          style="margin-top: 30vh"
        >
          <v-list-item>
            <v-list-item-title @click="goTo('Home')"> Home </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="goTo('About')">
              About
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goTo('Single')">
              Single
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
};
</script>