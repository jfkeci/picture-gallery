<template>
  <v-card>
    <v-card-title class="text-h5 grey lighten-2">
      Create new post
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Title" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Description" required></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="$emit('close-dialog')"> save </v-btn>
    </v-card-actions>
  </v-card>
</template>