<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Login</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form ref="form" class="mx-2 my-2" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            type="password"
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>
        </v-form>
        <v-divider> </v-divider>
        <small>Don't have an account? <a @click="register">Register</a></small>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="$store.commit('hideDialog')">
        Close
      </v-btn>
      <v-btn color="blue darken-1" text @click="login"> Login </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    valid: true,
    email: "iivanovic@mail.com",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "iivanovic123",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
    ],
  }),
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("loginUser", user);
      this.$refs.form.reset();
    },
    register() {
      this.$store.commit("setAction", "register");
      this.$store.commit("showDialog");
    },
  },
};
</script>