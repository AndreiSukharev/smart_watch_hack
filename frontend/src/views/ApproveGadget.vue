<template>
  <div class="pa-6">
    <div>
      <div class="text-h3" v-text="'Подтвердить устройство строителя'"></div>
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
        <div>Строй организация</div>
        <div>{{ approveGadgetInfo.company }}</div>
      </div>
      <div class="info-line mt-4">
        <div>Сотрудник</div>
        <div>{{ approveGadgetInfo.employee }}</div>
      </div>
      <div class="info-line">
        <div>ИНН</div>
        <div>{{ approveGadgetInfo.INN }}</div>
      </div>
      <div class="info-line">
        <div>Телефон</div>
        <div>{{ approveGadgetInfo.phone }}</div>
      </div>
      <div class="info-line">
        <div>Устройство</div>
        <div>{{ approveGadgetInfo.gadget }}</div>
      </div>
    </div>
    <div class="input-fields mt-10">
      <v-text-field
        label="Должность"
        outlined
        dense
        color="gray"
        v-model="position"
      ></v-text-field>
      <v-text-field
        label="Дата начала работы"
        outlined
        color="gray"
        dense
        v-model="startedAt"
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
        company: 'СтройПром',
        employee: 'Иванов Иван Иванович',
        INN: '12312312312132132132',
        phone: '+7 (999) 999-99-99',
        gadget: 'asg55654'
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
