<template>
  <div>
    <Comments v-if="action == 'showComments'" />
    <Login v-if="action == 'login'" />
    <Register v-if="action == 'register'" />
    <Create v-if="action == 'create'" />
    <Delete v-if="action == 'delete'" />
  </div>
</template>

<script>
import Login from "../forms/Login";
import Register from "../forms/Register";
import Create from "../forms/Create";
import Delete from "../forms/Delete";
import Comments from "./comments/Comments";
export default {
  name: "Create",
  components: {
    Login,
    Register,
    Comments,
    Create,
    Delete,
  },
  computed: {
    action() {
      return this.$store.getters.getAction;
    },
  },
};
</script>