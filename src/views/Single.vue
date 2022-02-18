<template>
  <div style="height: 100vh">
    <v-card
      class="mx-auto"
      elevation="4"
      outlined
      shaped
      height="70vh"
      max-width="80vh"
    >
      <v-img
        class="white--text align-end"
        src="https://picsum.photos/1500/1500"
        height="50vh"
        width="80vh"
      >
        <v-card-title>Post title</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Share </v-btn>

        <v-btn color="orange" text> Explore </v-btn>
      </v-card-actions>
      <br />
      <br />
    </v-card>
  </div>
</template>