<template>
  <v-alert :color="color" :type="message.type" v-if="message">
    {{ message.text }}
  </v-alert>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: {
      required: true,
    },
  },
  computed: {
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