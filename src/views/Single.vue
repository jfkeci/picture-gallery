<template>
  <v-card
    class="mx-auto"
    elevation="4"
    outlined
    shaped
    style="margin-top: 5vh"
    max-width="70vw"
    max-height="60vh"
  >
    <v-img class="white--text align-end" src="https://picsum.photos/1500/1500">
      <v-card-title>Post title</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text> Share </v-btn>

      <v-btn color="orange" text> Explore </v-btn>
    </v-card-actions>
    <br />
    <br />
  </v-card>
</template>