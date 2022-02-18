<template>
  <v-card>
    <v-card-title class="text-h5 grey lighten-2">
      {{ actionText }}
    </v-card-title>

    <!-- <v-card-text v-if="action == 'delete'">
      Are you sure you want to delete this post?
    </v-card-text> -->
    <!-- v-if="action == 'create' || action == 'update'" -->
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Title" required v-model="title"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Description"
              required
              v-model="body"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Tags" required v-model="tags"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Selected file"
              required
              v-model="selectedFile"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <small>Separate tags with ','</small>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="$emit('close-dialog')"> Close </v-btn>
      <v-btn color="success" text @click="saveNewPost()"> Save </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Create",
  data: () => ({
    title: "",
    body: "",
    tags: "",
    selectedFile: "https://picsum.photos/1500/1500",
  }),
  methods: {
    saveNewPost() {
      this.$store.dispatch("saveNewPost", {
        title: this.title,
        body: this.body,
        tags: this.tags,
        selectedFile: this.selectedFile,
      });
      this.setMessage("Post saved");
      this.resetForm();
    },
    resetForm() {
      this.title = "";
      this.body = "";
      this.tags = "";
      this.selectedFile = "";
    },
  },
  computed: {
    action() {
      return this.$store.getters.getAction;
    },
    actionText() {
      const action = this.$store.getters.getAction;
      switch (action) {
        case "create":
          return "Create post";
        case "delete":
          return "Delete post";
        case "update":
          return "Update post";
        default:
          return "Show post";
      }
    },
  },
  watch: {
    operation() {
      console.log(this.operation);
    },
  },
};
</script>