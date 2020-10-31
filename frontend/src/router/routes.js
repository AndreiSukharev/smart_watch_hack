import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import Analytics from '@/views/Analytics.vue';

import Registries from '@/views/Registries.vue';
import Settings from '@/views/Settings.vue';
import Tasks from '@/views/Tasks.vue';

import Companies from '@/views/Companies.vue';
import Company from '@/views/Company.vue';

import Objects from '@/views/Objects.vue';
import Object from '@/views/Object.vue';

import Employee from '@/views/Employee.vue';
import Building from '@/views/Building.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: Analytics
  },
  {
    path: '/registries',
    name: 'registries',
    component: Registries
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks
  },

  // COMPANY
  {
    path: '/companies',
    name: 'companies',
    component: Companies
  },
  {
    path: '/company',
    name: 'company',
    component: Company
  },

  // OBJECT
  {
    path: '/objects',
    name: 'objects',
    component: Objects
  },
  {
    path: '/object',
    name: 'object',
    component: Object
  },

  // EMPLOYEE
  {
    path: '/employee',
    name: 'employee',
    component: Employee
  },
  {
    path: '/building',
    name: 'building',
    component: Building
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

export default routes;
