<template>
  <div class="menu-container">
    <div class="menu-item">
      <router-link to="/"
        ><img src="./assets/icons/home.svg" alt=""
      /></router-link>
    </div>
    <div class="menu-item">
      <router-link to="/saved"
        ><img src="./assets/icons/heart.svg" alt=""
      /></router-link>
    </div>
    <div class="menu-item">
      <router-link to="/add"
        ><img src="./assets/icons/add-post.svg" alt=""
      /></router-link>
    </div>
    <div class="menu-item">
      <router-link to="/sdg"
        ><img src="./assets/icons/sdg.svg" alt=""
      /></router-link>
    </div>
    <div class="menu-item">
      <router-link to="/profile"
        ><img src="./assets/icons/profile.svg" alt=""
      /></router-link>
    </div>
  </div>
  <router-view />
</template>

<style>
.menu-container {
  position: fixed;
  max-width: 300px;
  width: 75%;
  height: 69px;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;

  /* Primary Green */

  background: #00c390;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border-radius: 50px;
}

@media only screen and (max-width: 320px) {
  .menu-container {
    width: 200px;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.pagecontent {
  padding: 5px;
}

/* .search{
  text-align: center;  
} */

h1{
  text-align: left;
}


</style>
