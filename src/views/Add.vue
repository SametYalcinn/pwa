<template>
  <div>
    <h1>Add solution</h1>
  </div>
  <div>
    <div><h3>Title</h3></div>
    <div><input type="text" /></div>
  </div>
    <h3>Cover image</h3>
    <div class="block-container">
        <div><img src="../assets/icons/add-post-green.svg" alt=""></div>
    </div>
    <h3>Solution</h3>
    <h3>Description</h3>
    <input type="text">
    <div class="login-button" id="email">
        <div><span>Post solution</span></div>
      </div>
</template>

<script>
export default {
  name: "Add",
  components: {},
};
</script>

<style scoped>
.login-button {
  width: 50%;
  max-width: 200px;
  height: 34px;
  background-color: rgb(242, 242, 242);
  display: flex;
  padding: 4px 8px;
  border-radius: 20px;
  left: 0;
  right: 0;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}
.block-container {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 10px;
}
</style>
