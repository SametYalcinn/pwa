<template>
<div class="main">
<h1 style="margin: 40px 0px 0 40px">Profile</h1>
 <Info firstName='Ad' lastName='Vlems' picture='../assets/pf/1.jpeg' followers="2" following="30" />
 <Options />
 <div class="whitespace"></div>
 </div>
</template>

<script>
import Options from '../components/profile/Options';
import Info from '../components/profile/Info';

export default {
  name: "Profile",
  components: {
    Options,
    Info,
  },
};
</script>

<style scoped>
.main {
    text-align: center;
}
.whitespace {
    height: 100px;
}
</style>