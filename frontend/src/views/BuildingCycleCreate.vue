<template>
  <div class="pa-6">
    <div>
      <div class="text-h3" v-text="'Добавить цикл строительства'"></div>
      <div class="header-divider"></div>
    </div>
    <v-row>
      <v-col>
        <div class="text-h5" v-text="'Характеристика цикла'"></div>
        <div class="input-container mt-6">
          <v-btn outlined depressed>
            Добавить объект
          </v-btn>
          <v-select
            class="mt-4"
            :items="objects"
            label="Объект"
            outlined
            v-model="objectSelected"
          ></v-select>
          <v-btn outlined depressed>
            Добавить организацию
          </v-btn>
          <v-select
            class="mt-4"
            :items="company"
            label="Организация"
            outlined
            v-model="companySelected"
          ></v-select>
          <v-btn outlined depressed>
            Добавить строителя
          </v-btn>
          <v-select
            class="mt-4"
            :items="employee"
            label="Строитель"
            outlined
            v-model="employeeSelected"
          ></v-select>
          <v-text-field
            label="Должность"
            outlined
            dense
            color="gray"
            v-model="position"
          ></v-text-field>
          <v-text-field
            label="Дата начала вахты"
            outlined
            dense
            color="gray"
            v-model="startingAt"
          ></v-text-field>
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
      company: ['СтройПром', 'ГлавСтрой'],
      companySelected: '',
      employee: ['Иванов Иван Иванович', 'Игорев Игорь Игоревич'],
      employeeSelected: '',
      objects: ['Внуково', 'Объект-2'],
      objectSelected: '',
      position: '',
      startingAt: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.input-container {
  max-width: 400px;
}
</style>
