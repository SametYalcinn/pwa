<template>
  <div class="main">
    <div class="logo" style="margin-top: 30px">
      <img src="../assets/logo.svg" alt="" />
    </div>
    <div class="login-button" id="apple">
      <div>
        <img
          style="margin-top: 3px; width: 20px"
          src="../assets/icons/apple.svg"
          alt=""
        />
      </div>
      <router-link style="text-decoration: none; color: black" to="/profile"
        ><div><span>Continue with Apple</span></div></router-link
      >
    </div>
    <div class="login-button" id="google">
      <div>
        <img
          style="margin-top: 3px; width: 20px"
          src="../assets/icons/google.svg"
          alt=""
        />
      </div>
      <router-link style="text-decoration: none; color: black" to="/profile"
        ><div><span>Continue with Google</span></div></router-link
      >
    </div>
    <div style="margin: 30px">
      <p>Or continue with mail:</p>
    </div>
    <div>
      <input type="text" placeholder="email" class="login-input" />
    </div>
    <div>
      <input type="password" placeholder="password" class="login-input" />
    </div>
    <router-link style="text-decoration: none; color: black" to="/profile"
      ><div class="login-button" id="email">
        <div><span>Login</span></div>
      </div></router-link
    >
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  text-align: center;
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
.login-input {
  border: 0.5px solid rgb(232, 232, 232);
  padding: 14px;
  width: 80%;
  height: 21px;
  margin-bottom: 10px;
  border-radius: 20px;
}
</style>
