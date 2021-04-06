<template>
  <div class="menu-container">
    <div class="menu-item"><img src="../assets/icons/home.svg" alt="" /></div>
    <div class="menu-item"><img src="../assets/icons/heart.svg" alt="" /></div>
    <div class="menu-item">
      <img src="../assets/icons/add-post.svg" alt="" />
    </div>
    <div class="menu-item"><img src="../assets/icons/sdg.svg" alt="" /></div>
    <div class="menu-item">
      <img src="../assets/icons/profile.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
