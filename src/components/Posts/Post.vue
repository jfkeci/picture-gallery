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

      <v-card-text class="text--primary mt-2">
        <div>Description: {{ post.body }}</div>
      </v-card-text>
      <pre></pre>
      <v-card-actions>
        <v-btn color="orange" text @click="likePost">
          <v-icon>mdi-thumb-up-outline</v-icon>
          <v-icon>mdi-thumb-down-outline</v-icon>
        </v-btn>
        <pre>
          {{ isLiked }}
        </pre>
        <v-btn color="orange" text v-if="post.createdBy == this.user">
          Delete
        </v-btn>
        <v-btn @click="testit">testit</v-btn>
      </v-card-actions>
      <br />
      <br />
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
  methods: {
    likePost() {
      this.$store.dispatch("toggleLike", this.post);
    },
    testit() {
      this.$store.dispatch("deletePost", this.post._id);
      this.setMessage("Successfully removed the post " + this.post.title, null);
    },
  },
  computed: {
    loading() {
      return this.$store.getters.getPostsLoading;
    },
    user() {
      return this.$store.getters.getCurrentUser;
    },
    isLiked() {
      let posts = this.$store.getters.getPosts;
      let post = posts.filter((post) => post._id == this.post._id);
      console.log(post[0]["_id"] == this.user);
      return true;
    },
  },
};
</script>