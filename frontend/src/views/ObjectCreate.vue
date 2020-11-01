<template>
  <div class="pa-6">
    <div>
      <div class="text-h3" v-text="'Добавить объект строительства'"></div>
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
            label="Адрес объекта"
            outlined
            dense
            color="gray"
            v-model="object.address"
          ></v-text-field>
          <v-text-field
            label="Вид строительства"
            outlined
            dense
            color="gray"
            v-model="object.buildingType"
          ></v-text-field>
          <v-text-field
            label="Проект"
            outlined
            dense
            color="gray"
            v-model="object.project"
          ></v-text-field>
          <v-text-field
            label="Плановый срок сдачи"
            outlined
            dense
            color="gray"
            v-model="object.deadline"
          ></v-text-field>
          <v-text-field
            label="Бюджет строительства"
            outlined
            dense
            color="gray"
            v-model="object.budget"
          ></v-text-field>
          <v-text-field
            label="Банковский счет"
            outlined
            dense
            color="gray"
            v-model="object.bankAccount"
          ></v-text-field>
        </div>
        <v-btn outlined depressed>
          Получить геоданные объекта
        </v-btn>
        <div class="text-h5 mt-10" v-text="'Документы объекта'"></div>
        <div class="files-container mt-6 d-flex">
          <div class="d-flex">
            <div class="text-h6 font-weight-bold">Документация</div>
            <v-btn class="ml-4" outlined depressed>
              Загрузить *.pdf
            </v-btn>
          </div>
          <div class="d-flex ml-10">
            <div class="text-h6 font-weight-bold">Фотографии</div>
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
        address: '',
        buildingType: '',
        project: '',
        deadline: '',
        budget: '',
        bankAccount: ''
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
