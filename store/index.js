// store/index.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    user: null,
  },
  mutations: {
    // Mutations to update state based on login/logout actions
    login(state, user) {
      state.isLoggedIn = true;
      state.user = user;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  actions: {
    // Actions to perform login/logout and update state using mutations
    loginUser({ commit }, userData) {
      // Use Axios to communicate with the backend for login
      // Upon successful login, commit the 'login' mutation
      commit('login', userData);
    },
    logoutUser({ commit }) {
      // Use Axios or clear local storage for logout
      // Upon logout, commit the 'logout' mutation
      commit('logout');
    },
  },
});
