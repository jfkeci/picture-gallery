<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">User Profile</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form ref="form" class="mx-2 my-2" v-model="valid" lazy-validation>
          <v-text-field
            v-model="title"
            :counter="100"
            :rules="titleRules"
            label="Title"
            required
          ></v-text-field>

          <v-text-field
            v-model="body"
            :counter="250"
            :rules="bodyRules"
            label="Description"
            required
          ></v-text-field>

          <v-text-field
            v-model="tags"
            :counter="250"
            :rules="tagsRules"
            label="Tags"
            required
          ></v-text-field>

          <v-text-field
            v-model="selectedFile"
            :rules="selectedFileRules"
            label="Selected file"
            required
          ></v-text-field>

          <v-btn color="success" class="mr-4"> Create post </v-btn>
        </v-form>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text> Close </v-btn>
      <v-btn color="blue darken-1" text> Save </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    valid: true,
    title: "new post title",
    titleRules: [
      (v) => !!v || "Title is required",
      (v) => (v && v.length <= 100) || "Title must be less than 100 characters",
    ],
    body: "new post title",
    bodyRules: [
      (v) => !!v || "Description is required",
      (v) =>
        (v && v.length <= 250) ||
        "Description must be less than 250 characters",
    ],
    tags: "new post title",
    tagsRules: [
      (v) => !!v || "Put at least one tag",
      (v) => (v && v.length <= 250) || "Tags must be less than 250 characters",
    ],
    selectedFile: "https://picsum.photos/1500/1500",
    selectedFileRules: [(v) => !!v || "File is required"],
  }),
  methods: {
    saveNewPost() {
      this.$store.dispatch("saveNewPost", {
        title: this.title,
        body: this.body,
        tags: this.tags,
        selectedFile: this.selectedFile,
      });
      this.setMessage("Post saved", null);
      this.$refs.form.reset();
    },
  },
};
</script>