<template>
  <div>
    <div class="p-2">
      <div class="text-h3" v-text="headerText"></div>
      <div class="header-divider"></div>
    </div>
    <div class="charts-container">
      <pie-chart :chart-data="chartData" :options="chartOptions" />
      <div class="charts-container__text">
        <div v-for="entity in entities" :key="entity.title">
          {{ entity.title }}
        </div>
      </div>
    </div>
    <v-simple-table class="analytics-table" fixed-header height="400px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" v-for="header in tableHeaders" :key="header">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entity, index) in entities" :key="index">
            <td>{{ entity.name }}</td>
            <td>{{ entity.address }}</td>
            <td>{{ entity.region }}</td>
            <td>{{ entity.company }}</td>
            <td>{{ entity.employeesCount }}</td>
            <td>{{ entity.warningsCount }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { has, countBy } from 'lodash';
import BuildingService from '@/services/building.js';
import PieChart from '../components/PieChart.vue';

export default {
  name: 'Analytics',
  components: {
    PieChart
  },
  data() {
    return {
      service: null,
      headerText: '',
      chartData: {},
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true
      },
      tableHeaders: [],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159
        },
        {
          name: 'Ice cream sandwich',
          calories: 237
        },
        {
          name: 'Eclair',
          calories: 262
        },
        {
          name: 'Cupcake',
          calories: 305
        },
        {
          name: 'Gingerbread',
          calories: 356
        },
        {
          name: 'Jelly bean',
          calories: 375
        },
        {
          name: 'Lollipop',
          calories: 392
        },
        {
          name: 'Honeycomb',
          calories: 408
        },
        {
          name: 'Donut',
          calories: 452
        },
        {
          name: 'KitKat',
          calories: 518
        }
      ],
      entities: []
    };
  },
  created() {
    this.service = new BuildingService();
    if (has(this.$route, 'params.entity')) {
      switch (this.$route.params.entity) {
        case 'object':
          this.headerText = 'Объекты строительства по округам г. Москва';
          this.getObjectsList();
          break;
        case 'employee':
          this.headerText = 'Количество сотрудников по застройщикам';
          this.getEmployeesList();
          break;
        case 'gadgets':
          this.headerText =
            'Количество устройств на мониторинге по округам г. Москва';
          this.getGadgetsList();
          break;
      }
    } else {
      this.headerText = 'Объекты строительства по округам г. Москва';
      this.getObjectsList();
    }
  },
  methods: {
    async getObjectsList() {
      const { data } = await this.service.listObjects();
      const regions = data.regions;
      const buildings = data.buildings;
      const chartData = data.regions.map(region => {
        const count = countBy(buildings, b => b.region === region).true;
        return count;
      });
      this.chartData = {
        labels: regions,
        datasets: [
          {
            data: chartData,
            backgroundColor: ['#5B9BD5', '#FFC000', '#A5A5A5', '#ED7D31']
          }
        ]
      };
      this.tableHeaders = data.headers;
      this.entities = buildings;
    },
    getEmployeesList() {},
    getGadgetsList() {}
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
  max-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
}
.analytics-table {
  margin: 3rem;
}
</style>
