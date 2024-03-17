import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue';

// Define route components
const routes = [
  { path: '/', component: Dashboard },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;