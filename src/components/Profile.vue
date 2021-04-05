<template>
<h1>Profile</h1>
 <Info firstName='Samet' lastName='Sanduuuhrrr' picture='../assets/pf/1.jpeg' followers="2" following="30" />
 <Options />
 <div class="whitespace"></div>
</template>

<script>
import Options from './profile/Options';
import Info from './profile/Info';

export default {
  name: "Profile",
  components: {
    Options,
    Info,
  },
};
</script>

<style scoped>
.whitespace {
    height: 100px;
}
</style>
