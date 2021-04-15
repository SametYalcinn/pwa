<template>
  <div class="pagecontent">
    <div>
      <h1>Add solution</h1>
    </div>
    <div>
      <div><h3>Title</h3></div>
      <div class="search">
        <input type="text" class="input" placeholder="Title" />
      </div>
    </div>
    <h3>Cover image</h3>
    <div class="block-container">
      <div><img src="../assets/icons/add-post-green.svg" alt="" /></div>
    </div>
    <h3>Solution</h3>
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
    <h3>Description</h3>
    <input class="input" type="text" placeholder="Description" />
    <div class="login-button" id="email">
      <div><span>Post solution</span></div>
    </div>
    <div class="whitespace"></div>
  </div>
</template>

<script>
export default {
  name: "Add",
  components: {},
};
</script>

<style scoped>
.whitespace {
  height: 100px;
}
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
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.input {
  width: 100%;
  padding: 14px 20px;
  border: 1px solid rgb(240, 240, 240);
  border-radius: 20px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

.pagecontent {
  padding: 20px;
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
  margin: 10px 20px 10px 0px;
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
</style>
