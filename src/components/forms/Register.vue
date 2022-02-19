<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Register</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form ref="form" class="mx-2 my-2" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="surname"
            :rules="surnameRules"
            label="Surname"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>

          <v-text-field
            type="password"
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>

          <v-text-field
            type="password"
            v-model="confirmPassword"
            :rules="confirmPasswordRules"
            label="Confirm password"
            required
          ></v-text-field>

          <v-btn color="success" class="mr-4" @click="register">
            Register
          </v-btn>
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
let helperPwd = "";
export default {
  name: "Register",
  data: () => ({
    valid: true,
    name: "ivan",
    nameRules: [(v) => !!v || "Name is required"],
    surname: "ivanovic",
    surnameRules: [(v) => !!v || "Surname is required"],
    email: "iivanovic@mail.com",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "Must be a valid email",
    ],
    password: "iivanovic123",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
    ],
    confirmPassword: "iivanovic123",
    confirmPasswordRules: [
      (v) => !!v || "Password confirmation is required",
      (v) => (v && v == helperPwd) || "Passwords must be the same",
    ],
  }),
  methods: {
    register() {
      const user = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      this.$store.dispatch("registerUser", user);
      this.$refs.form.reset();
    },
  },
  watch: {
    password() {
      helperPwd = this.password;
    },
  },
};
</script>