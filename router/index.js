// router/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';

// Import components for routes
import Login from '@/components/Login.vue';
import Signup from '@/components/Signup.vue';
import TaskList from '@/components/TaskList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/tasks',
    name: 'TaskList',
    component: TaskList,
    meta: { requiresAuth: true }, // Protects this route, requires authentication
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Route guards for authentication
router.beforeEach((to, from, next) => {
    const isAuthenticated = store.state.isLoggedIn; // Access isLoggedIn from Vuex store state
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
      next('/login'); // Redirect unauthenticated users to login page
    } else {
      next();
  }
});

export default router;
