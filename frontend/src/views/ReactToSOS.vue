<template>
  <div class="pa-6">
    <div>
      <div class="text-h3" v-text="'Среагировать на ЧП'"></div>
      <div class="header-divider"></div>
    </div>
    <div class="mt-16">
      <div
        class="text-h4 font-weight-bold mb-3"
        v-text="'Общие сведения'"
      ></div>
      <div class="info-line">
        <div>Адрес объекта</div>
        <div>{{ approveGadgetInfo.address }}</div>
      </div>
      <div class="info-line">
        <div>Участник ЧП</div>
        <div>{{ approveGadgetInfo.employee }}</div>
      </div>
      <div class="info-line">
        <div>Должность</div>
        <div>{{ approveGadgetInfo.position }}</div>
      </div>
      <div class="info-line">
        <div>Строй. Организация</div>
        <div>{{ approveGadgetInfo.company }}</div>
      </div>
      <div class="info-line mt-4">
        <div>Ответственный</div>
        <div>{{ approveGadgetInfo.responsiblePerson }}</div>
      </div>
      <div class="info-line">
        <div>Телефон ответственного</div>
        <div>{{ approveGadgetInfo.phone }}</div>
      </div>
    </div>
    <div class="input-fields mt-10">
      <v-btn outlined depressed>
        Позвонить в организацию
      </v-btn>
    </div>
    <div class="mt-10 d-flex">
      <v-btn outlined depressed>
        Выполнено
      </v-btn>
      <v-btn class="ml-10" outlined depressed>
        Отложить
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApproveGadget',
  data() {
    return {
      headerText: '',
      position: '',
      startedAt: '',
      approveGadgetInfo: {
        address: 'г. Москва, ул. Вавилова, xx',
        position: 'Маляр',
        company: 'СтройПром',
        employee: 'Иванов Иван Иванович',
        responsiblePerson: 'Игорев Игорь Игоревич',
        phone: '+7 (999) 999-99-99'
      }
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.header-divider {
  height: 2px;
  width: 100%;
  background-color: #fb2424;
}
.input-fields {
  max-width: 300px;
}
.info-line {
  display: flex;
  & > :first-child {
    width: 300px;
  }
}
</style>
