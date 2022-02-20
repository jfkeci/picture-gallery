<template>
  <div style="overflow-y: auto; overflow-x: hidden" v-if="post">
    <v-card class="mx-auto my-5" elevation="4" outlined shaped max-width="60vw">
      <v-img class="white--text align-end" :src="$apiUrl + post.selectedFile">
        <v-card-title>{{ post.title }}</v-card-title>
      </v-img>

      <v-card-text class="text--primary">
        <div>
          {{ post.body }}
        </div>
      </v-card-text>

      <Comments :post="post" @update-comments="getPost" />
    </v-card>
  </div>
</template>

<script>
import Comments from "../components/comments/Comments";
export default {
  name: "Single",
  components: {
    Comments,
  },
  created() {
    this.getPost();
  },
  computed: {
    id() {
      return this.$route.params.id || null;
    },
    post() {
      return this.$store.getters.getCurrentPost;
    },
  },
  methods: {
    getPost() {
      if (this.id) {
        this.$store.commit("setLoading", true);
        this.$store.dispatch("getPost", this.id);
      } else {
        this.$store.commit("setMessage", {
          text: "No id parameter set",
          type: "error",
        });
      }
    },
  },
};
</script>