<template>
  <div class="pa-6">
    <div>
      <div class="text-h3" v-text="'Мониторинг объектов строительства'"></div>
      <div class="header-divider"></div>
    </div>
    <div class="charts-container">
      <div class="charts-container__group">
        <pie-chart :chart-data="chartData" :options="chartOptions" />
        <div>Объекты по округам г. Москва</div>
      </div>
      <div class="charts-container__group">
        <pie-chart :chart-data="chartData" :options="chartOptions" />
        <div>Количество сотрудников по застройщикам</div>
      </div>
      <div class="charts-container__group">
        <pie-chart :chart-data="chartData" :options="chartOptions" />
        <div>Количество устройств на мониторинге по округам г. Москва</div>
      </div>
    </div>
    <div class="bar-chart-container">
      <bar-chart :chart-data="chartData" :options="chartOptions" />
      <div>Количество устройств в разных статусах по объектам г. Москва</div>
    </div>
  </div>
</template>

<script>
import PieChart from '../components/PieChart.vue';
import BarChart from '../components/BarChart.vue';

export default {
  name: 'Dashboard',
  components: {
    PieChart,
    BarChart
  },
  data() {
    return {
      chartData: {
        labels: ['ЮАО', 'ЦАО', 'ЗАО', 'ВАО'],
        datasets: [
          {
            data: [35, 22, 164, 8],
            backgroundColor: ['#5B9BD5', '#FFC000', '#A5A5A5', '#ED7D31']
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true
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

.charts-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  &__group {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
      margin-top: 1rem;
    }
  }
}

.bar-chart-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
}
</style>
