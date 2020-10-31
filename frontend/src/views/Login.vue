<template>
  <v-row>
    <v-col>
      <h1>Sign in</h1>
    </v-col>
    <!-- <v-col>
        <label>Email</label>
        <input required v-model="email" type="email" placeholder="Name" />
      </v-col>
      <v-col>
        <label>Password</label>
        <input
          required
          v-model="password"
          type="password"
          placeholder="Password"
        />
      </v-col> -->
  </v-row>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  }
};
</script>

<style lang="scss" scoped></style>
