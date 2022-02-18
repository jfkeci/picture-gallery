<template>
  <div style="height: 100vh; overflow-y: auto; overflow-x: hidden">
    <input type="text" />
    <Post v-for="post in posts" :key="post._id" :post="post" />
  </div>
</template>

<script>
import Post from "../posts/Post";
export default {
  components: { Post },
  name: "Posts",
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
    post() {
      return this.$store.getters.getCurrentPost;
    },
  },
  watch: {
    posts() {
      console.log("inposts", this.posts);
    },
  },
};
</script>