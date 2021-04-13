<template>
<div class="avatar">
  <img class="profile" src="../../assets/pf/1.jpeg" />
  <h2>{{ firstName }} {{ lastName }}</h2>
  <div class="following-container">
  <div>
    <span> {{ followers }} </span><br />
    <span>Followers</span>
  </div>
  <div>
    <span> {{ following }} </span><br />
    <span>Following</span>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Info",
    props: {
    firstName: String,
    lastName: String,
    picture: String,
    followers: Number,
    following: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.following-container {
  display: flex;
  justify-content: space-around;
  width: 300px;
  left: 0;
  right: 0;
  margin: auto;
  margin-bottom: 30px;
}

.profile {
width: 104px;
height: 101px;
left: 155px;
top: 93px;
/* 
background: url(download.jpg); */
border-radius: 20px;
}
</style>
