<template>
    <form @submit.prevent="addTask">
      <label for="title">Task Title:</label>
      <input type="text" id="title" v-model="taskTitle" required>
      <!-- Other input fields for task details -->
      <button type="submit">Add Task</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        taskTitle: '',
        // Other task details if needed
      };
    },
    methods: {
      addTask() {
        const newTask = {
          title: this.taskTitle,
          // Other task details
        };
  
        axios.post('/tasks', newTask) // Replace with your backend endpoint for adding tasks
          .then(response => {
            console.log('Task added:', response.data);
            // Optionally, update local data or notify the user about the successful task addition
          })
          .catch(error => {
            console.error('Error adding task:', error);
          });
      },
    },
  };
  </script>
  