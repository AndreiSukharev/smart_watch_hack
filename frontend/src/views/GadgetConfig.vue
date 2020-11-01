<template>
  <div class="pa-6">
    <div>
      <div class="text-h3" v-text="'Конфигурировать устройство'"></div>
      <div class="header-divider"></div>
    </div>
    <v-row>
      <v-col>
        <div class="text-h5" v-text="'Характеристика устройства'"></div>
        <div class="input-container mt-6">
          <v-select
            :items="gadgets"
            label="Выберите устройство"
            outlined
            v-model="gadgetSelected"
          ></v-select>
        </div>
        <div class="text-h5" v-text="'Характеристика вахты'"></div>
        <div class="input-container mt-6">
          <v-select
            :items="users"
            label="Текущий пользователь"
            outlined
            v-model="currentUserSelected"
          ></v-select>
          <v-select
            :items="objects"
            label="Текущий объект"
            outlined
            v-model="currentObjectSelected"
          ></v-select>
        </div>
        <div class="mt-10 d-flex">
          <v-btn outlined depressed>
            Сохранить
          </v-btn>
          <v-btn class="ml-10" outlined depressed>
            Отменить
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gadgets: ['70000000000', '800000000000'],
      gadgetSelected: '',
      users: ['Иванов Иван Иванович', 'Игорев Игорь Игоревич'],
      currentUserSelected: '',
      objects: ['Объект-1', 'Объект-2'],
      currentObjectSelected: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.input-container {
  max-width: 400px;
}
</style>
