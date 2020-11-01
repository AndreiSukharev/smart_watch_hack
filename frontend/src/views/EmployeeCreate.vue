<template>
  <div class="pa-6">
    <div>
      <div class="text-h3" v-text="'Добавить карточку строителя'"></div>
      <div class="header-divider"></div>
    </div>
    <v-row>
      <v-col>
        <div class="text-h5" v-text="'Общие сведения'"></div>
        <v-btn class="mt-6" outlined depressed>
          Импортировать из xlsx
        </v-btn>
        <div class="input-container mt-6">
          <v-text-field
            label="ФИО"
            outlined
            dense
            color="gray"
            v-model="object.name"
          ></v-text-field>
          <v-text-field
            label="Дата рождения"
            outlined
            dense
            color="gray"
            v-model="object.bornDate"
          ></v-text-field>
          <v-text-field
            label="Серия и номер паспорта"
            outlined
            dense
            color="gray"
            v-model="object.passport"
          ></v-text-field>
          <v-text-field
            label="Телефон"
            outlined
            dense
            color="gray"
            v-model="object.phone"
          ></v-text-field>
          <v-text-field
            label="ИНН"
            outlined
            dense
            color="gray"
            v-model="object.INN"
          ></v-text-field>
          <v-text-field
            label="Гражданство"
            outlined
            dense
            color="gray"
            v-model="object.citizenship"
          ></v-text-field>
        </div>
        <div class="text-h5 mt-10" v-text="'Документы'"></div>
        <div class="files-container mt-6 d-flex">
          <div class="d-flex">
            <div class="text-h6 font-weight-bold">Скан паспорта</div>
            <v-btn class="ml-4" outlined depressed>
              Загрузить
            </v-btn>
          </div>
          <div class="d-flex ml-10">
            <div class="text-h6 font-weight-bold">Фотография</div>
            <v-btn class="ml-4" outlined depressed>
              Загрузить
            </v-btn>
          </div>
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
      object: {
        name: '',
        bornDate: '',
        passport: '',
        phone: '',
        INN: '',
        citizenship: ''
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.input-container {
  max-width: 400px;
}
</style>
