<template>
    <div>
      <!-- Navbar -->
      <header class="header">
        <div class="logo">
          <img src="https://i.ibb.co/ryBnSnn/Black-Outline-Street-Brand-Modern-Typography-Logo-2.png" alt="CrimeLine Logo" />
        </div>
        <nav class="navbar">
          <a href="/" class="nav-link">Home</a>
          <a href="/login" class="nav-link">Login</a>
          <a href="/register" class="nav-link">Sign Up</a>
        </nav>
      </header>
  
      <!-- Main Content -->
      <div class="content">
        <h2>You are reporting for: {{ person }}</h2>
        <h3>What crime are you reporting?</h3>
        <div class="box">
          <button v-for="crime in crimes" :key="crime" @click="selectCrime(crime)">
            <span>{{ crime }}</span>
          </button>
        </div>
  
        <!-- Continue Button -->
        <div v-if="selectedCrime">
          <p>You have selected: <strong>{{ selectedCrime }}</strong></p>
          <button @click="continueReport">Continue</button>
        </div>
  
        <!-- Back Button -->
        <button @click="goBack">Back</button>
      </div>
  
      <!-- Footer -->
      <footer>
        <p>© 2024 Crime Line. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    props: ['person'],
    data() {
      return {
        selectedCrime: null,
        crimes: ['Robbery', 'Theft', 'Shooting', 'GBV', 'Hijacking', 'Abuse', 'Others'],
      };
    },
    methods: {
      selectCrime(crime) {
        this.selectedCrime = crime;
      },
      continueReport() {
        if (this.selectedCrime) {
          alert(`You selected ${this.selectedCrime} for ${this.person}`);
          // Here you can route to another page or handle the submission
        } else {
          alert("Please select a crime before continuing.");
        }
      },
      goBack() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap');
  
  body {
    font-family: 'Josefin Sans', sans-serif;
    background-color: #333;
    margin: 0;
    padding: 0;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: white;
    color: black;
  }
  
  .logo img {
    height: 6vh;
    width: auto;
  }
  
  .navbar {
    display: flex;
    gap: 20px;
  }
  
  .nav-link {
    color: black;
    text-decoration: none;
    font-size: 18px;
  }
  
  .nav-link:hover {
    background-color: gold;
    padding: 5px;
  }
  
  .content {
    text-align: center;
    color: white;
    padding: 20px;
  }
  
  footer {
    margin-top: 1%;
    background-color: #0056b3;
    color: white;
    text-align: center;
    padding: 10px;
  }
  
  footer p {
    margin: 5px;
  }
  
  .box {
    width: 600px;
    margin: 20px auto;
    overflow: hidden;
    height: auto;
  }
  
  .button {
  /* General button styles */
  height: 90px;
  width: 280px;
  line-height: 90px;
  background: transparent;
  border: 3px solid #fff;
  margin: 10px;
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

/* Remove X animation and green overlay for specific buttons */
button:first-child,
button:nth-child(2),
button:nth-child(3),
button:nth-child(4),
button:nth-child(5),
button:nth-child(6),
button:nth-child(7) {
  /* Remove animation styles */
  /* Reset styles to simplify */
}

button:first-child {
  color: #27f;
  border-color: #27f;
}

button:nth-child(2) {
  color: #EA4335;
  border-color: #EA4335;
}

button:nth-child(3) {
  color: #FBBC05;
  border-color: #FBBC05;
}

button:nth-child(4) {
  color: #34A853;
  border-color: #34A853;
}

button:nth-child(5) {
  color: #6A5F2F;
  border-color: #6A5F2F;
}

button:nth-child(6) {
  color: #D53669;
  border-color: #D53669;
}

button:nth-child(7) {
  color: #9B59B6;
  border-color: #9B59B6;
}

/* Remove X animation and green overlay effects */
button:before,
button:after {
  content: none;
}

/* Specific button styles remain */
button:first-child,
button:nth-child(2),
button:nth-child(3),
button:nth-child(4),
button:nth-child(5),
button:nth-child(6),
button:nth-child(7) {
  /* Any other specific button styles */
}
  </style>
  