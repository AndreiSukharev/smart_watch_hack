import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import Analytics from '@/views/Analytics.vue';

import Registries from '@/views/Registries.vue';
import Settings from '@/views/Settings.vue';

import Management from '@/views/Management.vue';
import CompanyCreate from '@/views/CompanyCreate.vue';
import ObjectCreate from '@/views/ObjectCreate.vue';
import EmployeeCreate from '@/views/EmployeeCreate.vue';
import GadgetConfig from '@/views/GadgetConfig.vue';
import BuildingCycleCreate from '@/views/BuildingCycleCreate.vue';

import Tasks from '@/views/Tasks.vue';
import ApproveGadget from '@/views/ApproveGadget.vue';
import ReactToSOS from '@/views/ReactToSOS.vue';

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

  // MANAGEMENT
  {
    path: '/management',
    name: 'management',
    component: Management
  },
  {
    path: '/company/create',
    name: 'company-create',
    component: CompanyCreate
  },
  {
    path: '/object/create',
    name: 'object-create',
    component: ObjectCreate
  },
  {
    path: '/employee/create',
    name: 'employee-create',
    component: EmployeeCreate
  },
  {
    path: '/gadget/config',
    name: 'gadget-config',
    component: GadgetConfig
  },
  {
    path: '/building-cycle/create',
    name: 'building-cycle-create',
    component: BuildingCycleCreate
  },

  // TASKS
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/approve-gadget',
    name: 'approve-gadget',
    component: ApproveGadget
  },
  {
    path: '/react-to-sos',
    name: 'react-to-sos',
    component: ReactToSOS
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
