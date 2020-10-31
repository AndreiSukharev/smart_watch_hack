<template>
  <v-row align="center" justify="center">
    <v-col>
      <v-card class="mx-auto pa-6 mt-16" max-width="500px" outlined>
        <div class="text-h4">Мониторинг строительства</div>
        <div class="d-flex justify-center">
          <div class="divider my-10"></div>
        </div>
        <v-text-field
          label="Логин"
          placeholder="Введите логин"
          outlined
          color="gray"
          v-model="login"
        ></v-text-field>
        <v-text-field
          label="Пароль"
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="showPassword ? 'text' : 'password'"
          name="input-10-1"
          outlined
          placeholder="Введите пароль"
          hint="At least 8 characters"
          counter
          @click:append="showPassword = !showPassword"
          color="gray"
        ></v-text-field>
        <div class="d-flex justify-center">
          <v-btn class="mt-4" depressed color="#06BD4F">
            Авторизоваться
          </v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: '',
      password: '',
      showPassword: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.divider {
  width: 200px;
  background-color: #fb2424;
  height: 4px;
}
</style>
