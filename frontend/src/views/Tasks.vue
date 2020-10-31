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
              Сделать до
            </th>
            <th class="text-left">
              Ответственный
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(task, index) in tasks"
            :key="index"
            @click="openTask(task)"
          >
            <td>{{ task.name }}</td>
            <td>{{ task.date }}</td>
            <td>{{ task.owner }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import TasksMock from '@/services/mock/tasks';

export default {
  name: 'Tasks',
  data() {
    return {
      headerText: 'Реестры',
      tasks: []
    };
  },
  created() {
    this.tasks = TasksMock;
  },
  methods: {
    openTask(task) {
      console.log(task);
      this.$router.push({ name: task.route, params: task.params });
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
