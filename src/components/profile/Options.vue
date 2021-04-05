<template>
<div class="profile-option"><div><span class="profile-option-text">Saved</span></div></div>
<div class="profile-option"><div><span class="profile-option-text">My Solutions</span></div></div>
<div class="profile-option"><div><span class="profile-option-text">Notifications</span></div></div>
<div class="profile-option"><div><span class="profile-option-text">Settings</span></div></div>
</template>

<script>
export default {
  name: "Options",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-option-text {
  color: white;
  font-size: 18px;
  margin-left: 40px;
}

.profile-option {
width: 340px;
height: 54px;
left: 0;
right: 0;
margin: auto;
margin-top: 12px;
display: flex;
justify-content: start;
align-items: center;

/* Primary Green */

background: #00C390;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
border-radius: 30px;
}
</style>
