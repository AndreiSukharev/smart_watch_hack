<template>
  <div class="pa-6">
    <div>
      <div class="text-h3" v-text="headerText"></div>
      <div class="header-divider"></div>
    </div>
    <v-tabs color="gray" @change="onTabsChange">
      <v-tab>Общие сведения</v-tab>
      <v-tab>Карта объекта</v-tab>
    </v-tabs>
    <object-info v-show="currentTabIndex === 0" :object="object" />
    <object-map v-show="currentTabIndex === 1" :object="object" />
  </div>
</template>

<script>
import { has } from 'lodash';
import ObjectInfo from '@/components/ObjectInfo.vue';
import ObjectMap from '@/components/ObjectMap.vue';

export default {
  name: 'Company',
  components: {
    ObjectInfo,
    ObjectMap
  },
  data() {
    return {
      headerText: '',
      object: null,
      currentTabIndex: 0
    };
  },
  created() {
    // this.headerText = this.$route.params.id;
    // // fetch object

    // Don't ever do like this
    if (has(this.$route, 'params.name')) {
      this.headerText = this.$route.params.name;
    } else {
      this.headerText = 'ОКС 1';
    }
  },
  methods: {
    onTabsChange(index) {
      console.log(index);
      this.currentTabIndex = index;
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
</style>
