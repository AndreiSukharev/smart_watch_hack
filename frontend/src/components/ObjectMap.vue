<template>
  <div class="pa-16">
    <v-img
      contain
      src="../assets/map.png"
      transition="scale-transition"
      width="800"
    />
    <div class="buttons-area mt-10">
      <div v-if="editing" class="d-flex">
        <v-btn outlined depressed @click="save">
          Сохранить
        </v-btn>
        <v-btn class="ml-10" outlined depressed @click="cancel">
          Отменить
        </v-btn>
      </div>
      <div v-else>
        <v-btn outlined depressed @click="edit">
          Редактировать
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
// import Map from '@/components/Map.vue';

export default {
  components: {
    // Map
  },
  data() {
    return {
      editing: false
    };
  },
  methods: {
    edit() {
      this.editing = true;
    },
    save() {
      this.editing = false;
    },
    cancel() {
      this.editing = false;
    }
  }
};
</script>

<style></style>
