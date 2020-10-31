<template>
  <div class="pa-6">
    <div>
      <div class="text-h3" v-text="headerText"></div>
      <div class="header-divider"></div>
    </div>
    <v-simple-table class="registries-table" fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Реестр строительных организаций
            </th>
            <th class="text-left">
              Дата обновления
            </th>
            <th class="text-left">
              Ответственный
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(company, index) in companies"
            :key="index"
            @click="openCompany(company)"
          >
            <td>{{ company.name }}</td>
            <td>{{ company.date }}</td>
            <td>{{ company.owner }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import CompaniesMock from '@/services/mock/companies';

export default {
  name: 'Companies',
  data() {
    return {
      headerText: 'Сведения',
      companies: []
    };
  },
  created() {
    this.companies = CompaniesMock;
  },
  methods: {
    openCompany(company) {
      console.log(company);
      this.$router.push({ name: 'company', params: company.params });
    }
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
