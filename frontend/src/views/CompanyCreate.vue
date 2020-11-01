<template>
  <div class="pa-6">
    <div>
      <div class="text-h3" v-text="'Добавить строительную организацию'"></div>
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
            label="Наименование организации"
            outlined
            dense
            color="gray"
            v-model="company.name"
          ></v-text-field>
          <v-text-field
            label="Руководитель"
            outlined
            dense
            color="gray"
            v-model="company.director"
          ></v-text-field>
          <v-text-field
            label="Дата создания организации"
            outlined
            dense
            color="gray"
            v-model="company.createdAt"
          ></v-text-field>
          <v-text-field
            label="Размер уставного капитала"
            outlined
            dense
            color="gray"
            v-model="company.capital"
          ></v-text-field>
          <v-text-field
            label="ИНН организации"
            outlined
            dense
            color="gray"
            v-model="company.INN"
          ></v-text-field>
          <v-text-field
            label="Банковский счет"
            outlined
            dense
            color="gray"
            v-model="company.bankAccount"
          ></v-text-field>
        </div>
        <v-btn outlined depressed>
          Загрузить организацию по ИНН
        </v-btn>
        <div class="text-h5 mt-10" v-text="'Документы организации'"></div>
        <div class="files-container mt-6 d-flex">
          <div class="d-flex">
            <div class="text-h6 font-weight-bold">Устав</div>
            <v-btn class="ml-4" outlined depressed>
              Загрузить *.pdf
            </v-btn>
          </div>
          <div class="d-flex ml-10">
            <div class="text-h6 font-weight-bold">ОШС</div>
            <v-btn class="ml-4" outlined depressed>
              Загрузить *.xlsx
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
      company: {
        name: '',
        director: '',
        createdAt: '',
        capital: '',
        INN: '',
        bankAccount: ''
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.header-divider {
  height: 2px;
  width: 100%;
  background-color: #fb2424;
}
.input-container {
  max-width: 400px;
}
</style>
