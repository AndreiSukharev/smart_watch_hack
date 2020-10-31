<template>
  <div class="pa-6">
    <div>
      <div class="text-h3" v-text="'Настройки'"></div>
      <div class="header-divider"></div>
    </div>
    <v-simple-table class="pa-6 registries-table" fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Пользователь
            </th>
            <th class="text-left">
              Рабочие процессы
            </th>
            <th class="text-left">
              Группа доступа
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ADMIN</td>
            <td>
              <v-select
                class="mt-6"
                :items="processes"
                dense
                outlined
                v-model="adminProcessesSelected"
                :menu-props="{ maxHeight: '400' }"
                multiple
                :value="'ALL'"
              ></v-select>
            </td>
            <td>
              <v-select
                class="mt-6"
                :items="groups"
                v-model="adminGroupSelected"
                dense
                outlined
                :value="'ALL'"
              ></v-select>
            </td>
          </tr>
          <tr>
            <td>OPERATOR</td>
            <td>
              <v-select
                class="mt-6"
                :items="processes"
                dense
                outlined
                v-model="operatorProcessesSelected"
                :menu-props="{ maxHeight: '400' }"
                multiple
                :value="'ALL'"
              ></v-select>
            </td>
            <td>
              <v-select
                v-model="operatorGroupSelected"
                class="mt-6"
                :items="groups"
                dense
                outlined
                :value="'ALL'"
              ></v-select>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      adminProcessesSelected: ['ALL'],
      operatorProcessesSelected: ['TASK', 'PART PROCESS'],
      adminGroupSelected: 'ALL',
      operatorGroupSelected: 'PART',
      processes: ['ALL', 'TASK', 'PART PROCESS'],
      groups: ['ALL', 'PART']
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
.registries-table {
  margin-top: 3rem;
}
</style>
