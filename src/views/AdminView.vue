<template>
    <div class="admin">
      <h2>Admin View</h2>
      <div>
        <h3>Reports</h3>
        <ul>
          <li v-for="report in reports" :key="report.id">
            <p>Person: {{ report.person }}</p>
            <p>Location: {{ report.location }}</p>
            <p>Details: {{ report.details }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reports: [
          { id: 1, person: 'John Doe', location: 'Location A', details: 'Emergency details here' }
          // Add more mock reports here
        ]
      };
    }
  };
  </script>
  
  <style>
  .admin {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: black;
    color: white;
  }
  </style>
  