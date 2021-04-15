<template>
  <div class="photo-container">
    <img class="picture" src="../assets/post.png" alt="" />
  </div>
  <div class="content-container">
    <div class="info-container">
      <div class="header">
        <div style="margin-bottom: 20px">
          <h2 style="margin-bottom: 2px">Garden Lighting</h2>
          door <b>Ad Vlems</b>
        </div>
        <div><img src="../assets/icons/share.svg" /></div>
      </div>
      <div class="text">
        Here are some tips for your garden in the summer. These minor changes
        helped me to turn my garden into a productive environment. Read more
        Here are some tips for your garden in the summer. These minor changes
        helped me to turn my garden into a productive environment. Here are some
        tips for your garden in the summer. These minor changes helped me to
        turn my garden into a productive environment. Here are some tips for
        your garden in the summer. These minor changes helped me to turn my
        garden into a productive environment. Read more Here are some tips for
        your garden in the summer. These minor changes helped me to turn my
        garden into a productive environment.
      </div>
    </div>
    <h3>Comments</h3>
    <div class="comments-container">
      <div class="comment-block">
        <div>
          <img
            style="
              width: 33px;
              height: auto;
              border-radius: 138px;
              margin-right: 20px;
            "
            src="../assets/pf/1.jpeg"
            alt=""
          />
        </div>
        <div>
          <div><h4>Ronald Hazelzet</h4></div>
          <div>Thank you for the inspiration!</div>
        </div>
      </div>
    </div>
    <div class="comments-container">
      <div class="comment-block">
        <div>
          <img
            style="
              width: 33px;
              height: auto;
              border-radius: 138px;
              margin-right: 20px;
            "
            src="../assets/pf/1.jpeg"
            alt=""
          />
        </div>
        <div>
          <div><h4>Johan Bohan</h4></div>
          <div>Nice, I will try this!</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Post",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0 !important;
}
.photo-container {
  margin: 0;
}
.picture {
  width: 100%;
  height: auto;
}

.content-container {
  position: absolute;
  top: 30%;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
}
h4 {
  margin-bottom: 2px;
  margin-top: 0;
}

.comments-container {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 12px 24px;
  margin-bottom: 26px;
}

.comment-block {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}
</style>
