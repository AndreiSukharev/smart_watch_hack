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
              Реестры данных
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
            v-for="(registry, index) in registries"
            :key="index"
            @click="openRegistry(registry)"
          >
            <td>{{ registry.name }}</td>
            <td>{{ registry.date }}</td>
            <td>{{ registry.owner }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import RegistriesMock from '@/services/mock/registries';

export default {
  name: 'Registries',
  data() {
    return {
      headerText: 'Сведения',
      registries: []
    };
  },
  created() {
    this.registries = RegistriesMock;
  },
  methods: {
    openRegistry(registry) {
      console.log(registry);
      this.$router.push({ name: registry.route, params: registry.params });
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
