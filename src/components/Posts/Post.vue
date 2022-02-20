<template>
  <div>
    <v-card
      v-if="post"
      class="mx-auto my-5"
      elevation="4"
      outlined
      shaped
      max-width="350"
      :hover="true"
    >
      <v-img
        class="white--text align-end"
        height="300px"
        :src="$apiUrl + post.selectedFile"
      >
        <v-card-title>{{ post.title }}</v-card-title>
      </v-img>

      <v-card-text class="text--primary mt-2">
        <div>Description: {{ post.body }}</div>
      </v-card-text>
      <pre></pre>
      <v-card-actions>
        <v-btn color="orange" text @click="toggleLike">
          <v-icon v-if="!isLiked">mdi-thumb-up-outline</v-icon>
          <v-icon v-if="isLiked">mdi-thumb-down-outline</v-icon>
        </v-btn>

        <v-divider class="mx-4"></v-divider>
        <v-btn v-if="canEdit" color="orange" text @click="deletePrompt">
          Delete
        </v-btn>
        <v-btn color="orange" text @click="updatePrompt"> Edit </v-btn>
        <v-btn color="orange" text @click="showPost"> Show </v-btn>
        <v-divider class="mx-4"></v-divider>
      </v-card-actions>
      <br />
      <br />
    </v-card>
  </div>
</template>

<script>
import routerMixin from "../../mixins/routerMixin";
export default {
  name: "Post",
  mixins: [routerMixin],
  props: {
    post: {
      required: true,
      type: Object,
    },
  },
  methods: {
    toggleLike() {
      this.$store.dispatch("toggleLike", this.post);
    },
    deletePrompt() {
      this.$store.commit("setAction", "delete-post");
      this.$store.commit("setDialogPost", this.post);
      this.$store.commit("showDialog");
    },
    updatePrompt() {
      this.$store.commit("setAction", "update");
      this.$store.commit("setDialogPost", this.post);
      this.$store.commit("showDialog");
    },
    showPost() {
      console.log(this.$route.params.id);
      console.log(this.post._id);
      console.log(this.$route.params.id != this.post._id);
      if (this.$route.params.id != this.post._id) {
        this.$store.commit("setCurrentPost", this.post);
        this.goTo("post", this.post._id);
      }
    },
  },
  computed: {
    loading() {
      return this.$store.getters.getPostsLoading;
    },
    user() {
      return this.$store.getters.getCurrentUser;
    },
    canEdit() {
      return this.post.createdBy == this.user;
    },
    isLiked() {
      return this.post.likes.includes(this.$store.getters.getCurrentUser);
    },
  },
  watch: {
    posts: {
      handler(val) {
        console.log("@like", val);
      },
      deep: true,
    },
  },
};
</script>