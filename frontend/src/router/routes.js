import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import Analytics from '@/views/Analytics.vue';
import Company from '@/views/Company.vue';
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
    path: '/company',
    name: 'company',
    component: Company
  },
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
