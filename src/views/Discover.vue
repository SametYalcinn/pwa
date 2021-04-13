<template>
  <IntroductionModal v-if="firstTime" @closeIntroductionModal="firstTime = false"/>
</template>

<script>
import IntroductionModal from "../components/IntroductionModal";


export default {
  name: "Discover",
  data() {
    return {
      firstTime: true
    }
  },
  components: {
    IntroductionModal,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

