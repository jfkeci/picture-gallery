<template>
  <v-alert
    :color="color"
    :type="message.type"
    v-if="message"
    style="margin: 3vh"
  >
    {{ message.text }}
  </v-alert>
</template>

<script>
export default {
  name: "Message",
  computed: {
    message() {
      return this.$store.getters.getMessage;
    },
    color() {
      switch (this.message.type) {
        case "warning":
          return "red";
        case "success":
          return "green";
        case "info":
          return "yellow";
        default:
          return "purple";
      }
    },
  },
};
</script>