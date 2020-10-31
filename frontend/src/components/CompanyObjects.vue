<template>
  <div>
    <v-simple-table fixed-header class="pa-6 mt-6" height="500px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Объект
            </th>
            <th class="text-left">
              Адрес
            </th>
            <th class="text-left">
              Год контракта
            </th>
            <th class="text-left">
              Кол-во сотрудников
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(object, index) in mockedObjects" :key="index">
            <td>{{ object.name }}</td>
            <td>{{ object.address }}</td>
            <td>{{ object.yearOfContract }}</td>
            <td>{{ object.employeeCount }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import MockedObjects from '@/services/mock/objects';

export default {
  name: 'CompanyObjects',
  props: {
    objects: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      mockedObjects: []
    };
  },
  created() {
    this.mockedObjects = MockedObjects;
  }
};
</script>

<style lang="scss" scoped></style>
