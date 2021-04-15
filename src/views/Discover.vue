<template>
  <!-- <IntroductionModal v-if="firstTime" @closeIntroductionModal="firstTime = false"/> -->

<div class="margin-page">
  <div class="pagecontent">
    <h1>Discover</h1>
    <div class="search">
      <input type="text" class="input" placeholder="Search" />
    </div>
  </div>

  <div class="h-filter">
    <div class="filter-item">
      <img src="../assets/icons/sun.svg" />
      <p>Sunny</p>
    </div>
    <div class="filter-item">
      <img src="../assets/icons/cloud-rain.svg" />
      <p>Rain</p>
    </div>
    <div class="filter-item">
      <img src="../assets/icons/cloud-snow.svg" />
      <p>Snow</p>
    </div>
    <div class="filter-item">
      <img src="../assets/icons/sun.svg" />
      <p>Sunny</p>
    </div>
    <div class="filter-item">
      <img src="../assets/icons/cloud-snow.svg" />
      <p>Snow</p>
    </div>
  </div>

  <div class="pagecontent" style="margin-top: 10px">
    <div class="dailytip">
      <div class="content-dt">
        <h1>Daily Tip</h1>
        <p>Special selected daily tip by our experts!</p>
      </div>
      <img src="../assets/dailytip.svg" />
    </div>
  </div>

  <div class="pagecontent">
    <h1>Impact</h1>
    <div class="impact">
      <div class="impactuser">
        <h2>Impacted users</h2>
        <p>7273</p>
      </div>
      <div class="users">
        <h2>Users</h2>
        <p>7273</p>
      </div>
    </div>
  </div>

  <main id="Discover">
    <!-- CARDS -->
    <section class="cards">
      <PostCard v-for="card in cards" :key="card.color" :card="card" />
    </section>
  </main>

  <div class="whitespacenav"></div>
  </div>
</template>

<script>
// import IntroductionModal from "../components/IntroductionModal";
import PostCard from "../components/PostCard";

export default {
  name: "Discover",
  data() {
    return {
      firstTime: true,
      cards: [
        {
          title: "Heavy Rain!",
          src: require("../assets/img-1.jpeg"),
          added: "2h ago",
        },
        {
          title: "Garden Lightning",
          src: require("../assets/img-2.jpeg"),
          added: "3h ago",
        },
        {
          title: "Cleaning your pool",
          src: require("../assets/img-3.jpeg"),
          added: "4h ago",
        },
      ],
    };
  },
  components: {
    // IntroductionModal,
    PostCard,
  },
};
</script>

<style>
.margin-page {
  margin: 12px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.input {
  width: 100%;
  padding: 14px 20px;
  border: 1px solid rgb(240, 240, 240);
  border-radius: 20px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.05);
}

.h-filter {
  margin-top: 20px;
  overflow: auto;
  white-space: nowrap;
}

.filter-item {
  text-align: center;
  background: white;
  border-radius: 20px;
  width: 13vh;
  height: 13vh;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: inline-block;
  margin: 10px;
  position: relative;
}

.filter-item img {
  margin-top: 20px;
}

.filter-item p {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  color: #00c390;
  font-weight: 600;
}

.dailytip {
  border-radius: 20px;
  background-color: #00c390;
  color: white;
  display: flex;
  padding: 5px 0 0 10px;
  position: relative;
}

.dailytip h1 {
  margin-top: 5px;
  margin-bottom: 2px;
}

.dailytip img {
  position: absolute;
  right: 0;
  bottom: -25px;
}

.content-dt {
  width: 60%;
}

.impact {
  display: flex;
  justify-content: space-between;
}

.impact h2 {
  font-size: 20px;
}

.impactuser {
  width: 60%;
  text-align: center;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}

.users {
  width: 30%;
  text-align: center;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}
</style>
