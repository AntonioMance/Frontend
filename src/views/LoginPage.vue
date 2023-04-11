<template>
  <div class="d-grid container-fluid">
    <div class="row">
      <div class="col d-grid justify-content-center align-content-center">
        <h1 class="display-1 text-primary fw-bold text pb-5 mb-3">LetsPlay</h1>
      </div>
      <div class="col d-grid justify-content-start align-content-center">
        <div class="row-3">
          <div class="col-auto">
            <form class="form-floating">
              <input
                type="email"
                class="form-control mb-3 form-select-lg"
                id="username"
                placeholder="Email"
                v-model="email"
              />
              <label for="floatingInput">Email address</label>
            </form>
          </div>
          <div class="col">
            <form class="form-floating">
              <input
                type="password"
                class="form-control mb-3 form-select-lg text-bg-"
                id="password"
                placeholder="Password"
                v-model="password"
              />
              <label for="floatingInput">Password</label>
            </form>
          </div>
          <div class="col">
            <button
              @click="($event) => loginFunction()"
              class="btn btn-primary btn-lg"
            >
              Log in
            </button>
            <h2>
              Dont have an account?
              <a href="../Register" class="text-info text-decoration-none"
                >Register
              </a>
            </h2>
            <h3 class="text-center">
              back to
              <a href="../" class="text-info text-decoration-none">website </a>
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

body {
  background-size: cover;
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