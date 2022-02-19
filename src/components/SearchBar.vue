<template>
  <v-toolbar class="indigo lighten-1 white--text">
    <v-toolbar-title>Search</v-toolbar-title>
    <v-autocomplete
      :loading="loading"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="Search for items"
      solo-inverted
    ></v-autocomplete>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      search: null,
    };
  },
  watch: {
    /* search(val) {
      this.getItems(val);
    }, */
  },
  methods: {
    getItems(filter) {
      this.$store.dispatch("getPosts", { type: "search", filter: filter });
    },
  },
  computed: {
    loading() {
      return this.$store.getters.getPostsLoading;
    },
  },
};
</script>