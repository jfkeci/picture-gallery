<template>
  <v-alert type="success">Some text here</v-alert>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: {
      required: true,
    },
  },
};
</script>