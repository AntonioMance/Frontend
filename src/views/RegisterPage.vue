<template>
  <div class="image"></div>
  <div
    class="container-fluid d-grid justify-content-center justify-items-center align-items-center text-center"
  >
    <div class="row">
      <div class="col">
        <h1 class="display-1 text-danger fw-bold">LetsPlay</h1>
      </div>
    </div>
    <div class="align-content-lg-center">
      <div class="row">
        <div class="col">
          <form class="form-floating">
            <input
              type="text"
              class="form-control mb-3 form-select-lg input-background"
              id="username"
              placeholder="Username"
              v-model="username"
            />
            <label for="floatingInput">Username</label>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <form class="form-floating">
            <input
              type="email"
              class="form-control mb-3 form-select-lg input-background"
              id="Email1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="email"
            />
            <label for="Email1">Email address</label>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col pb-5">
          <form class="form-floating">
            <input
              type="password"
              class="form-control form-select-lg input-background"
              id="password"
              placeholder="Password"
              v-model="password"
            />
            <label for="floatingInput">Password</label>
          </form>
         
         <div>
          <button
            @click="($event) => registerFunction()"
            class="btn btn-danger btn-lg text-dark mt-4"
            >
            Create new account
          </button>
        </div>
        <div class="row d-flex">
          <div class="col-7">
            <router-link to="/" class="btn btn-danger btn-lg mt-4 text-dark">Return Home</router-link>
          </div>
         <div class="col">
          <router-link to="/login" class="btn btn-danger btn-lg mt-4 text-dark">Log in</router-link>
        </div>
        </div>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },

  methods: {
    async registerFunction() {
  let json = {
    username: this.username,
    email: this.email,
    password: this.password,
  };

  await fetch(`http://localhost:3000/app/users/register`, {
    method: "POST",
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
        return res.json().then((data) => {
          throw new Error(data.message);
        });
      }
    })
    .then((data) => {
      this.messages = data;
      console.log(data);
      this.$cookies.remove("guest");
      this.$router.push({ name: 'login' });
    })
    .catch((error) => {
      console.error("Error:", error.message);
      alert(error.message);
    });
},
  },
};
</script>

<style scoped>
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

.container-fluid{
min-height: 700px;
}

.input-background{
background-color:firebrick;
}
</style>