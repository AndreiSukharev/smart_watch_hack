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
              Действие
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(action, index) in actions"
            :key="index"
            @click="openAction(action)"
          >
            <td>{{ action.name }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import ActionsMock from '@/services/mock/actions';

export default {
  name: 'Management',
  data() {
    return {
      headerText: 'Управление',
      actions: []
    };
  },
  created() {
    this.actions = ActionsMock;
  },
  methods: {
    openAction(action) {
      console.log(action);
      this.$router.push({ name: action.route, params: action.params });
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
