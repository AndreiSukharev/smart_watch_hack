<template>
  <div>
    <v-simple-table fixed-header class="pa-6 mt-6" height="500px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              ФИО
            </th>
            <th class="text-left">
              Должность
            </th>
            <th class="text-left">
              E-mail
            </th>
            <th class="text-left">
              Номер телефона
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee, index) in mockedEmployee" :key="index">
            <td>{{ employee.name }}</td>
            <td>{{ employee.position }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.phone }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import MockedEmployee from '@/services/mock/employee';

export default {
  name: 'CompanyEmployee',
  props: {
    employee: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      mockedEmployee: []
    };
  },
  created() {
    this.mockedEmployee = MockedEmployee;
  }
};
</script>

<style lang="scss" scoped></style>
