<template>
  <v-app>
    <v-app-bar app color="primary" dark elevation="0">
      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-navigation-drawer app color="primary" floating :permanent="sidebarMenu">
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar height="80" class="rounded-0">
            <v-img
              contain
              src="./assets/gerald_msc2.png"
              transition="scale-transition"
              height="92"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Департамент</v-list-item-title>
            <v-list-item-title>строительства</v-list-item-title>
            <v-list-item-title>Москвы</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem">
          <template v-for="(route, index) in routes">
            <v-list-item
              v-if="!route.children.length"
              :key="route.title"
              class="mb-0"
              @click="changeRoute(route)"
            >
              <v-list-item-content>
                <v-list-item-title>{{ route.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-group
              color="gray"
              v-else
              :key="route.title"
              :value="true"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-title>{{ route.title }}</v-list-item-title>
              </template>
              <v-list-item
                v-for="subRoute in route.children"
                :key="subRoute.title"
                class="mb-0"
                @click="changeRoute(subRoute)"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ subRoute.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-divider
              v-if="index < routes.length - 1"
              :key="index"
            ></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { has } from 'lodash';

export default {
  name: 'App',
  data: () => ({
    sidebarMenu: true,
    selectedItem: null,
    routes: [
      {
        title: 'Главная страница',
        routeName: 'dashboard',
        params: {},
        children: []
      },
      {
        title: 'Аналитика',
        children: [
          {
            title: 'Объекты',
            routeName: 'analytics',
            params: { entity: 'object' }
          },
          {
            title: 'Сотрудники',
            routeName: 'analytics',
            params: { entity: 'employee' }
          },
          {
            title: 'Устройства',
            routeName: 'analytics',
            params: { entity: 'gadget' }
          }
        ]
      },
      {
        title: 'Общие сведения',
        routeName: 'statistics',
        params: {},
        children: []
      },
      {
        title: 'Управление',
        routeName: 'dashboard',
        params: {},
        children: []
      },
      {
        title: 'Устройства',
        routeName: 'dashboard',
        params: {},
        children: []
      }
    ]
  }),
  mounted() {
    this.selectedItem = 0;
  },
  methods: {
    changeRoute(route) {
      console.log(route);
      if (has(route, 'routeName')) {
        if (this.$route.name !== route.routeName) {
          this.$router.push({ name: route.routeName, params: route.params });
        }
      }
    }
  }
};
</script>
