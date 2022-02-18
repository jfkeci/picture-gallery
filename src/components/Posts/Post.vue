<template>
  <div>
    <v-card
      v-if="!noPosts && post.selectedFile"
      class="mx-auto"
      elevation="4"
      outlined
      shaped
      style="margin-top: 5vh"
      max-width="350"
      :hover="true"
    >
      <v-img
        class="white--text align-end"
        height="300px"
        :src="post.selectedFile"
      >
        <v-card-title>{{ post.title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ post.body }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Share </v-btn>

        <v-btn color="orange" text> Explore </v-btn>
      </v-card-actions>
      <br />
      <br />
    </v-card>
    <v-card
      v-if="noPosts"
      :loading="loading"
      class="mx-auto"
      elevation="4"
      outlined
      shaped
      style="margin-top: 5vh"
      max-width="350"
    >
      <v-img
        class="white--text align-end"
        height="300px"
        src="https://picsum.photos/1500/1500"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Share </v-btn>

        <v-btn color="orange" text> Explore </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      required: true,
      type: Object,
    },
    noPosts: {
      default: false,
    },
  },
  computed: {
    loading() {
      return this.$store.getters.getPostsLoading;
    },
  },
};
</script>