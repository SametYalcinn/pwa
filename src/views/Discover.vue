<template>
  <IntroductionModal v-if="firstTime" @closeIntroductionModal="firstTime = false"/>
  
  <div class="pagecontent">
    <h1>Profile</h1>
    <div class="search">
      <input type="text" class="input" placeholder="Search">
    </div>
  </div>

  <div class="h-filter">
    <div class="filter-item">
      <img src="../assets/icons/sun.svg"/>
      <p>Sunny</p>
    </div>
    <div class="filter-item">
      <img src="../assets/icons/cloud-rain.svg"/>
      <p>Sunny</p>
    </div>
    <div class="filter-item">
      <img src="../assets/icons/cloud-snow.svg"/>
      <p>Sunny</p>
    </div>
    <div class="filter-item">
      <img src="../assets/icons/sun.svg"/>
      <p>Sunny</p>
    </div>
    <div class="filter-item">
      <img src="../assets/icons/cloud-snow.svg"/>
      <p>Sunny</p>
    </div>
  </div>

 

</template>


<script>
import IntroductionModal from "../components/IntroductionModal";



export default {
  name: "Discover",
  data() {
    return {
      firstTime: true
    }
  },
  components: {
    IntroductionModal,
  },
};


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.h-filter{
  margin-top: 20px;
  overflow: auto;
  white-space: nowrap;
}

.filter-item{
  text-align: center;
  background: white;
  border-radius: 20px;
  width: 15vh;
  height: 15vh;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px; 
  display: inline-block;
  margin: 10px;
  position: relative;
}

.filter-item img{
 margin-top: 20px;
}

.filter-item p{
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  color: #00C390;
  font-weight: 600;
}

 

</style>

