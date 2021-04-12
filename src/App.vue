<template>
  <Menu />
  <Login />
  <!-- <Profile /> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Menu from "./components/Menu.vue";
// import Profile from './components/Profile';
import Login from "./components/Login.vue";
// import Info from './components/profile/Info';

export default {
  name: "App",
  components: {
    // HelloWorld,
    Menu,
    Login,
    // Profile,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
