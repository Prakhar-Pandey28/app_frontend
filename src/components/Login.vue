<template>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Send login request to backend using Axios
        axios.post('/login', { username: this.username, password: this.password })
          .then(response => {
            // Handle successful login (e.g., store token in Vuex, redirect)
          })
          .catch(error => {
            // Handle login failure (e.g., display error message)
          });
      },
    },
  };
  </script>
  