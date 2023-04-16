<template>
  <div class="image"></div>
  <div class="d-grid container-fluid">
    <div class="row">
      <div class="col d-grid justify-content-center align-content-center ">
        <h1 class="display-1 fw-bold text mb-5 pb-5" style="color: rgb(255, 125, 94); text-shadow: rgba(255,41,62,0.95) 0px 0px 30px; -webkit-text-stroke-width: 2px;   
            -webkit-text-stroke-color: darkred; ">LetsPlay</h1>
      </div>
      <div class="col d-grid justify-content-start align-content-center">
        <div class="row-3">
          <div class="col-auto">
            <form class="form-floating">
              <input
                type="email"
                class="form-control mb-3 form-select-lg input-background"
                id="username"
                placeholder="Email"
                v-model="email"
              />
              <label class="inputLabel" for="floatingInput">Email address</label>
            </form>
          </div>
          <div class="col">
            <form class="form-floating">
              <input
                type="password"
                class="form-control mb-3 form-select-lg input-background"
                id="password"
                placeholder="Password"
                v-model="password"
              />
              <label class="inputLabel" for="floatingInput">Password</label>
            </form>
          </div>
          <div class="col" style="background-color: rgba(34, 34, 34, 0.6); border-radius: 15px; padding: 10px;">
            <button
              @click="($event) => loginFunction()"
              class="btn btn-danger btn-lg" style="background-color: #b22124; color: rgb(255, 175, 154); margin-bottom: 15px;"
            >
              Log in
            </button>
            <h2 style="color: rgb(134, 134, 134);">
              Dont have an account?
              <a href="../Register" style="color: rgb(255, 135, 94);             -webkit-text-stroke-width: 1px;   
            -webkit-text-stroke-color: red;  " class="text-decoration-none"
                >Register
              </a>
            </h2>
            <h3 class="text-center" style="color: rgb(134, 134, 134);">
              back to
              <a href="../"  style="color: rgb(255, 135, 94);             -webkit-text-stroke-width: 1px;   
            -webkit-text-stroke-color: red;" class="text-decoration-none">Home</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  min-height: 969px;
}

.image{
  background-image: url(../assets/redbackground.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.input-background{
color: rgb(255, 175, 154);
background-color:firebrick;
}

.inputLabel {
  color: rgb(255, 175, 154);
}
</style>

<script>

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
   
  },
  methods: {
    async loginFunction() {
      let json = { email: this.email, password: this.password };
      console.log(json);

      await fetch(`http://localhost:3000/app/users/login`, {
        method: "PATCH",
        body: JSON.stringify(json),
        credentials: "include",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Login failed");
          }
        })
        .then((data) => {
          this.messages = data;
          console.log(data);
          const cookies = data.cookies;
          this.$cookies.remove("guest");
          console.log(cookies)
          if (!this.$cookies.get("loginToken")) {
            this.$cookies.set("loginToken", cookies.loginToken);
          }
          if (!this.$cookies.get("email")) { 
            this.$cookies.set("email", cookies.email);
          }
          if (!this.$cookies.get("username")) {
            this.$cookies.set("username", cookies.username);
          }
          this.$router.push({ name: "mainpage" });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>