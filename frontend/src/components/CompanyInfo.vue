<template>
  <div>
    <div class="my-16">
      <div class="info-line">
        <div>Наименование организации</div>
        <div>{{ companyMocked.name }}</div>
      </div>
      <div class="info-line">
        <div>Руководитель</div>
        <div>{{ companyMocked.director }}</div>
      </div>
      <div class="info-line">
        <div>Размер уставного капитала</div>
        <div>{{ companyMocked.capital }}</div>
      </div>
      <div class="info-line">
        <div>Налоговый рейтинг</div>
        <div>{{ companyMocked.taxRating }}</div>
      </div>
      <div class="info-line mt-4">
        <div>ИНН организации</div>
        <div>{{ companyMocked.INN }}</div>
      </div>
      <div class="info-line">
        <div>Банковский счет</div>
        <div>{{ companyMocked.bankAccount }}</div>
      </div>
      <div class="info-line mt-4">
        <div>Количество сотрудников</div>
        <div>{{ companyMocked.employees }}</div>
      </div>
      <div class="info-line">
        <div>Участие в ГК</div>
        <div>{{ companyMocked.gk }}</div>
      </div>
    </div>
    <v-divider />
    <div class="mt-12 pa-6">DOCUMENTS</div>
  </div>
</template>

<script>
export default {
  name: 'CompanyInfo',
  props: {
    company: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      companyMocked: {
        name: 'ООО Застройщик',
        director: 'Иванов Иван Иванович',
        capital: 10000000,
        taxRating: '10.0',
        INN: '1221112221',
        bankAccount: '121212121212111212121',
        employees: 100,
        gk: 1
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.info-line {
  display: flex;
  & > :first-child {
    width: 300px;
  }
}
</style>
