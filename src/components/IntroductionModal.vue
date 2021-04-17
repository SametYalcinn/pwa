<template>
  <div id="overlay" />
  <div id="slideshow">
    <div class="slider">
      <div class="slide">
        <div class="flex">
          <div>
            <h1>Discover</h1>
          </div>
          <div>
            <img
              class="close"
              src="../assets/close.svg"
              v-on:click="closeModal()"
            />
          </div>
        </div>
        <div class="content-text">
          <p>
            At the discover page you can find all the solutions to help you
            contribute for a better climate. It also gives you the possibility
            to search trough solutions.
          </p>
        </div>
        <div class="content-image">
          <img src="../assets/discover-intro.svg" />
        </div>
        <div class="indicator">
          <img src="../assets/slide1.svg" />
        </div>
      </div>
      <div class="slide">
        <div class="flex">
          <div>
            <h1>Save</h1>
          </div>
          <div>
            <img
              class="close"
              src="../assets/close.svg"
              v-on:click="closeModal()"
            />
          </div>
        </div>
        <div class="content-text">
          <p>
            You can find your saved solutions on this page. 
          </p>
        </div>
        <div class="content-image">
          <img src="../assets/save-intro.svg" />
        </div>
        <div class="indicator">
          <img src="../assets/slide2.svg" />
        </div>
      </div>
      <div class="slide">
        <div class="flex">
          <div>
            <h1>Add Solution</h1>
          </div>
          <div>
            <img
              class="close"
              src="../assets/close.svg"
              v-on:click="closeModal()"
            />
          </div>
        </div>
        <div class="content-text">
          <p>
            This page gives you the possibilty to add your own solution to the community.
          </p>
        </div>
        <div class="content-image">
          <img src="../assets/add-intro.svg" />
        </div>
        <div class="indicator">
          <img src="../assets/slide3.svg" />
        </div>
      </div>
      <div class="slide">
        <div class="flex">
          <div>
            <h1>SDG</h1>
          </div>
          <div>
            <img
              class="close"
              src="../assets/close.svg"
              v-on:click="closeModal()"
            />
          </div>
        </div>
        <div class="content-text">
          <p>
           You can read more about SDG 13; Climate Change and the latest news. 
          </p>
        </div>
        <div class="content-image">
          <img src="../assets/sdg-intro.svg" />
        </div>
        <div class="indicator">
          <img src="../assets/slide4.svg" />
        </div>
      </div>
      <div class="slide">
        <div class="flex">
          <div>
            <h1>Profile</h1>
          </div>
          <div>
            <img
              class="close"
              src="../assets/close.svg"
              v-on:click="closeModal()"
            />
          </div>
        </div>
        <div class="content-text">
          <p>
            You can view or edit your profile on this page. 
          </p>
        </div>
        <div class="content-image">
          <img src="../assets/profile-intro.svg" />
        </div>
        <div class="indicator">
          <img src="../assets/slide5.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroductionModal",
  components: {},
  created() {},
  mounted() {
    let self = this;
    let current_slide = 1;
    const body = document.querySelector("body");
    const menu = document.querySelector(".menu-container");
    body.style.overflow = "hidden";
    menu.style.display = "none";
    const slider = document.querySelector("#slideshow .slider");
    const slider1 = document.querySelector("#slideshow");
    slider1.addEventListener("click", function () {
      current_slide += 1;
      if (current_slide > 5) {
        current_slide = 1;
        self.closeModal();
        // current_slide =5;
      }
      slider.style.marginLeft = "-" + (current_slide - 1) * 100 + "%";
    });
  },
  methods: {
    closeModal() {
      const body = document.querySelector("body");
      const menu = document.querySelector(".menu-container");
      console.log("beibfief");
      this.$emit("closeIntroductionModal");
      body.style.overflow = "auto";
      menu.style.display = "flex";
    },
  },
};
</script>

<style scoped>
#overlay {
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0.1;
}

#slideshow {
  background-color: gray;
  overflow: hidden;
  position: absolute;
  width: 90%;
  height: 80%;
  left: 0;
  right: 0;
  margin: auto;
  top: 10%;
  background: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  z-index: 100;
}

#slideshow .slider {
  width: 500%;
  display: flex;
  transition: all 250ms;
}

#slideshow .slider .slide {
  width: 20%;
  height: 300px;
}

.close {
  cursor: pointer;
  width: 5vh;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8%;
  padding-right: 5%;
  padding-top: 3%;
}

.content-text {
  padding-left: 8%;
  padding-right: 5%;
  width: 80%;
}

.content-image {
  width: 30vh;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
}

.indicator {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 10%;
}
</style>
