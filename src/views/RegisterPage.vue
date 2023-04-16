<template>
  <div class="image"></div>
  <div
    class="container-fluid d-grid justify-content-center justify-items-center align-items-center text-center"
  >
    <div class="row">
      <div class="col">
        <h1 class="display-1 fw-bold" style="color: rgb(255, 125, 94); text-shadow: rgba(255,41,62,0.95) 0px 0px 30px; -webkit-text-stroke-width: 2px;   
            -webkit-text-stroke-color: darkred; ">LetsPlay</h1>
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
            <label class="inputLabel" for="floatingInput">Username</label>
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
            <label class="inputLabel" for="Email1">Email address</label>
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
            <label class="inputLabel" for="floatingInput">Password</label>
          </form>
         
         <div>
          <button style="background-color: #b22124; color: rgb(255, 175, 154);"
            @click="($event) => registerFunction()"
            class="btn btn-danger btn-lg mt-4"
            >
            Create new account
          </button>
        </div>
        <div class="row d-flex">
          <div class="col-7">
            <router-link style="background-color: #b22124; color: rgb(255, 175, 154);" to="/" class="btn btn-danger btn-lg mt-4">Return Home</router-link>
          </div>
         <div class="col">
          <router-link style="background-color: #b22124; color: rgb(255, 175, 154);" to="/login" class="btn btn-danger btn-lg mt-4">Log in</router-link>
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
color: rgb(255, 175, 154);
background-color:firebrick;
}

.inputLabel {
  color: rgb(255, 175, 154);
}

</style>