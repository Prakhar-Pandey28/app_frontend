<template>
    <div>
      <h2>Task List</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        tasks: [],
      };
    },
    mounted() {
      this.fetchTasks();
    },
    methods: {
      fetchTasks() {
        axios.get('/tasks') // Replace with your backend endpoint for fetching tasks
          .then(response => {
            this.tasks = response.data.tasks; // Assuming tasks are received in 'tasks' array in response
          })
          .catch(error => {
            console.error('Error fetching tasks:', error);
          });
      },
    },
  };
  </script>
  