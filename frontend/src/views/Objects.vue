<template>
  <div class="pa-6">
    <div>
      <div class="text-h3" v-text="headerText"></div>
      <div class="header-divider"></div>
    </div>
    <v-simple-table class="buildings-table" fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Реестр объектов капитального строительства
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
            v-for="(object, index) in objects"
            :key="index"
            @click="openObject(object)"
          >
            <td>{{ object.name }}</td>
            <td>{{ object.date }}</td>
            <td>{{ object.owner }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import ObjectsMock from '@/services/mock/objects';

export default {
  name: 'Objects',
  data() {
    return {
      headerText: 'Сведения',
      objects: []
    };
  },
  created() {
    this.objects = ObjectsMock;
  },
  methods: {
    openObject(object) {
      console.log(object);
      this.$router.push({ name: 'object', params: object.params });
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
.buildings-table {
  margin-top: 3rem;
}
</style>
