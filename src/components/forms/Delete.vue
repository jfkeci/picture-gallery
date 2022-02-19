<template>
  <v-card>
    <v-img
      height="200px"
      src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
    >
      <v-app-bar flat color="rgba(0, 0, 0, 0)">
        <v-toolbar-title class="text-h6 white--text pl-0">
          Delete
        </v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>

      <!-- <v-card-title class="white--text mt-8">
        <v-avatar size="56">
          <img
            alt="user"
            src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
          />
        </v-avatar>
        <p class="ml-3">John Doe</p>
      </v-card-title> -->
    </v-img>
    <v-card-text> Are you sure you want to delete this post? </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text> Close </v-btn>
      <v-btn color="blue darken-1" text> Delete </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>