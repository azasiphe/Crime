<template>
  <div>
    <header class="header">
      <div class="logo">
        <img src="https://i.ibb.co/ryBnSnn/Black-Outline-Street-Brand-Modern-Typography-Logo-2.png" alt="CrimeLine Logo" />
      </div>
      <nav class="navbar">
        <a href="/login" class="nav-link">Login</a>
        <a href="/register" class="nav-link">Sign Up</a>
      </nav>
    </header>
    <div>
    <h1>WANT TO REPORT A CRIME WATCH OR HAVING AN EMERGENCY</h1>
    <div class="box">
      <button @click="selectPerson('me')"><span>Me</span></button>
      <button @click="selectPerson('not me')"><span>Not Me</span></button>
      <button @click="selectPerson('neighbour')"><span>Neighbour</span></button>
      <button @click="selectPerson('someone far')"><span>Someone Far</span></button>
    </div>
  </div>
    <footer>
      <p>© 2024 Crime Line. All rights reserved.</p>
    </footer>
  </div>
</template>


<script>
export default {
  methods: {
    selectPerson(person) {
      this.$router.push({ name: 'select-crime', params: { person } });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap');

body {
  font-family: 'Josefin Sans', sans-serif;
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
  object-fit: cover;
  height: 6vh;
  width: 370%;
  position: relative;
  margin-top: 4px;
}

.navbar {
  display: flex;
  gap: 20px;
  margin-right: 20px;
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

*{
  box-sizing: border-box
}

body{
  margin: 0;
  padding: 0;
  background: #333;
  perspective: 1000px;
}

.box{
  width: 600px;
  margin: auto;
  padding-top: 20px;
  overflow: hidden;
  height: 100%
}

.box button{
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
  float: left;
  display: block;
  position: relative;
  overflow: hidden
}

.box button span{
  width: 100%;
  display: block;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  transition: all 0.1s ease 0.3s
}

button:hover span{color: #fff}

/*
===========================================
    the first button 
===========================================
*/

button:first-child{
  color: #27f;
  border-color: #27f
}

button:first-child:before{
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 300px;
  width: 30%;
  height: 60px;
  background: #27f;
  border-radius: 50%;
  transform: translateY(-50%);
}

button:first-child:hover:before{
  animation: hover-one 1s ease forwards
}

@keyframes hover-one{
  0%{
    top: 50%;
    left: 300px;
    width: 30%;
    height: 30px;
    border-radius: 50%;
    transform: translateY(-50%);
    opacity: 0
  }
  25%{
    top: 50%;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: translateY(-50%);
    opacity: 0.7
  }
  50%{
    top: 0;
    left: 0;
    width: 25%;
    height: 100%;
    border-radius: 0;
    transform: translateY(0);
    opacity: 1
  }
  100%{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
    transform: translateY(0);
  }
}


/*
===========================================
    the second button 
===========================================
*/

button:nth-child(2){
  color: #EA4335;
  border-color: #EA4335
}

button:nth-child(2):before{
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 300px;
  width: 30%;
  height: 30px;
  background: #EA4335;
  border-radius: 50%;
  transform: translateY(-50%);
}

button:nth-child(2):after{
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  right: 300px;
  width: 30%;
  height: 30px;
  background: #EA4335;
  border-radius: 50%;
  transform: translateY(-50%);
}

button:nth-child(2):hover:before{
  animation: hover-two-before 1s ease forwards
}

button:nth-child(2):hover:after{
  animation: hover-two-after 1s ease forwards
}

@keyframes hover-two-before{
  0%{
    top: 50%;
    left: 300px;
    width: 30%;
    height: 30px;
    border-radius: 50%;
    transform: translateY(-50%);
    opacity: 0
  }
  25%{
    top: 50%;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: translateY(-50%);
    opacity: 0.7
  }
  50%{
    top: 0;
    left: 0;
    width: 25%;
    height: 100%;
    border-radius: 0;
    transform: translateY(0);
    opacity: 1
  }
  100%{
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    border-radius: 0;
    transform: translateY(0);
  }
}

@keyframes hover-two-after{
  0%{
    top: 50%;
    right: 300px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: translateY(-50%);
    opacity: 0
  }
  25%{
    top: 50%;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: translateY(-50%);
    opacity: 0.7
  }
  50%{
    top: 0;
    right: 0;
    width: 25%;
    height: 100%;
    border-radius: 0;
    transform: translateY(0);
    opacity: 1
  }
  100%{
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    border-radius: 0;
    transform: translateY(0);
  }
}

/*
===========================================
    the third button 
===========================================
*/

button:nth-child(3){
  color: #FBBC05;
  border-color: #FBBC05
}

button:nth-child(3):before{
  content: "";
  display: block;
  position: absolute;
  top: -90px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FBBC05;
  transition: all 0.4s ease;
  opacity: 0.6
}

button:nth-child(3) span:before{
  content: "";
  display: block;
  position: absolute;
  top: -90px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FBBC05;
  transition: all 0.4s ease;
  opacity: 0.4
}

button:nth-child(3):after{
  content: "";
  display: block;
  position: absolute;
  top: -90px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FBBC05;
  transition: all 0.4s ease;
}

button:nth-child(3) span:after{
  content: "";
  display: block;
  position: absolute;
  top: -90px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FBBC05;
  transition: all 0.4s ease;
  opacity: 0.2
}

button:nth-child(3):hover:before{
  top: 0;
  transition-delay: 0.2s
}

button:nth-child(3):hover span:before{
  top: 0;
  transition-delay: 0.1s
}

button:nth-child(3):hover:after{
  top: 0;
  transition-delay: 0.3s
}

button:nth-child(3):hover span:after{
  top: 0;
}


/*
===========================================
    the fourth button 
===========================================
*/

button:nth-child(4){
  color: #34A853;
  border-color: #34A853
}

button:nth-child(4):before{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 300px;
  width: 100%;
  height: 25%;
  background: #34A853;
  transition: all 0.4s ease;
}

button:nth-child(4) span:before{
  content: "";
  display: block;
  position: absolute;
  top: 21px;
  left: 300px;
  width: 100%;
  height: 25%;
  background: #34A853;
  transition: all 0.4s ease;
  z-index: -1
}

button:nth-child(4):after{
  content: "";
  display: block;
  position: absolute;
  top: 42px;
  left: 300px;
  width: 100%;
  height: 25%;
  background: #34A853;
  transition: all 0.4s ease;
}

button:nth-child(4) span:after{
  content: "";
  display: block;
  position: absolute;
  bottom: 5px;
  left: 300px;
  width: 100%;
  height: 25%;
  background: #34A853;
  transition: all 0.4s ease;
  
}

button:nth-child(4):hover:before{
  left: 0;
}

button:nth-child(4):hover span:before{
  left: 0;
  transition-delay: 0.1s
}

button:nth-child(4):hover:after{
  left: 0;
  transition-delay: 0.2s
}

button:nth-child(4):hover span:after{
  left: 0;
  transition-delay: 0.3s
}


/*
===========================================
    the fifth button 
===========================================
*/

button:nth-child(5){
  color: #6A5F2F;
  border-color: #6A5F2F
}

button:nth-child(5):before{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 300px;
  width: 100%;
  height: 25%;
  background: #6A5F2F;
  transition: all 0.4s ease;
}

button:nth-child(5) span:before{
  content: "";
  display: block;
  position: absolute;
  top: 21px;
  right: 300px;
  width: 100%;
  height: 25%;
  background: #6A5F2F;
  transition: all 0.4s ease;
  z-index: -1
}

button:nth-child(5):after{
  content: "";
  display: block;
  position: absolute;
  top: 42px;
  left: 300px;
  width: 100%;
  height: 25%;
  background: #6A5F2F;
  transition: all 0.4s ease;
}

button:nth-child(5) span:after{
  content: "";
  display: block;
  position: absolute;
  bottom: 5px;
  right: 300px;
  width: 100%;
  height: 25%;
  background: #6A5F2F;
  transition: all 0.4s ease;
  
}

button:nth-child(5):hover:before{
  left: 0;
}

button:nth-child(5):hover span:before{
  right: 0;
}

button:nth-child(5):hover:after{
  left: 0;
}

button:nth-child(5):hover span:after{
  right: 0;
}


/*
===========================================
    the sixth button 
===========================================
*/

button:nth-child(6){
  color: #D53669;
  border-color: #D53669;
}

button:nth-child(6):before{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 25%;
  height: 100%;
  background: #D53669;
  transform: rotateY(90deg);
  transition: all 0.6s ease;
}

button:nth-child(6) span:before{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 69px;
  width: 25%;
  height: 97%;
  background: #D53669;
  transform: rotateY(90deg);
  transition: all 0.6s ease;
  z-index: -1
}


button:nth-child(6):after{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 138px;
  width: 25%;
  height: 100%;
  background: #D53669;
  transform: rotateY(90deg);
  transition: all .6s ease;
}

button:nth-child(6) span:after{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 207px;
  width: 25%;
  height: 97%;
  background: #D53669;
  transform: rotateY(90deg);
  transition: all 0.6s ease;
  z-index: -1
}



button:nth-child(6):hover:before{
  transform: rotateY(0)
}

button:nth-child(6):hover span:before{
  transform: rotateY(0);
  transition-delay: 0.2s;
}

button:nth-child(6):hover:after{
  transform: rotateY(0);
  transition-delay: 0.4s;
}

button:nth-child(6):hover span:after{
  transform: rotateY(0);
  transition-delay: 0.6s;
}


/*
===========================================
    the seventh button 
===========================================
*/

button:nth-child(7){
  color: #9B59B6;
  border-color: #9B59B6;
}

button:nth-child(7):before{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: -200px;
  width: 50%;
  height: 100%;
  background: #9B59B6;
  transition: all 0.6s ease;
}

button:nth-child(7) span:before{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: -63px;
  border-width: 42px 42px 42px 0;
  border-color: #9B59B6 transparent;
  border-style: solid;
  transition: all 0.6s ease;
  z-index: -1
}

button:nth-child(7):after{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: -200px;
  width: 50%;
  height: 100%;
  background: #9B59B6;
  transition: all 0.6s ease;
}

button:nth-child(7) span:after{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: -63px;
  border-width: 42px 0 42px 42px;
  border-color: #9B59B6 transparent;
  border-style: solid;
  transition: all 0.6s ease;
  z-index: -1
}



button:nth-child(7):hover:before{
  left: 0;
}

button:nth-child(7):hover:after{
  right: 0;
}

button:nth-child(7):hover span:before{
  left: 137px;
}

button:nth-child(7):hover span:after{
  right: 137px;
}


/*
===========================================
    the eighth button 
===========================================
*/

button:nth-child(8){
  color: #3498DB;
  border-color: #3498DB;
}

button:nth-child(8):before{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: -200px;
  width: 50%;
  height: 100%;
  background: #3498DB;
  transition: all 0.6s ease;
}

button:nth-child(8) span:before{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: -63px;
  border-width: 42px 0 42px 42px;
  border-color: transparent #3498DB;
  border-style: solid;
  transition: all 0.6s ease;
  z-index: -1
}

button:nth-child(8):after{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: -200px;
  width: 50%;
  height: 100%;
  background: #3498DB;
  transition: all 0.6s ease;
}

button:nth-child(8) span:after{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: -63px;
  border-width: 42px 42px 42px 0;
  border-color: transparent #3498DB;
  border-style: solid;
  transition: all 0.6s ease;
  z-index: -1
}



button:nth-child(8):hover:before{
  left: 0;
}

button:nth-child(8):hover:after{
  right: 0;
}

button:nth-child(8):hover span:before{
  left: 137px;
}

button:nth-child(8):hover span:after{
  right: 137px;
}



img#mo7amed{
  border-radius: 50%;
  position: fixed;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  transition: all 0.4s linear;
}

img#mo7amed:hover{
  transform: scale(1.1,1.1);
  box-shadow: 5px 5px 15px #000
}

@media (max-width: 620px){
  
  .box{width: 100%}
  
  .box button{
    float: none;
    margin: 20px auto;
  }
}

/* Media Queries */
@media (max-width: 768px) {

 
  .hero2 {
    position: relative;
    text-align: center;
    color: white;
    margin-bottom: -7px;
  }

  .hero-banner2 {
    width: 100%;
    height: 40%;
    overflow: hidden;
    display: block;
    object-fit: cover;
    position: relative;
    margin-top: 5%;
  }

  .hero-banner2 img {
    width: auto;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .hero2 {
    display: none;
  }
}

@media (max-width: 480px) {

  .header {
    padding: 8px;
  }

  .nav-link {
    font-size: 14px;
  }

  .logo {
    margin-left: -20px;
  }

  .hero-banner1 {
    height: 50vh;
  }

  .history h2 {
    font-size: 30px;
  }


  .hero2 {
    position: relative;
    text-align: center;
    color: white;
    margin-bottom: -7px;
  }

  .hero-banner2 {
    width: 100%;
    height: 40%;
    overflow: hidden;
    display: block;
    object-fit: cover;
    position: relative;
    margin-top: 5%;
  }

  .hero-banner2 img {
    width: auto;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
