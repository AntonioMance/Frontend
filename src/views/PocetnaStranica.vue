<template>
  <div >
    <div class="image"></div>
    <div class="container-fluid d-grid">
      <div class="row text-center">
        <div class="col">
          <h1 class="display-2 fw-bolder" style="color: rgb(255, 125, 94); text-shadow: rgba(255,41,62,0.95) 0px 0px 30px; -webkit-text-stroke-width: 2px;   
            -webkit-text-stroke-color: darkred; ">Welcome</h1>
        </div>
        <h1 class="display-2 fw-bolder pb-5" style="color: rgb(255, 125, 94); text-shadow: rgba(255,41,62,0.95) 0px 0px 30px; -webkit-text-stroke-width: 2px;   
            -webkit-text-stroke-color: darkred;">LetsPlay!</h1>
      </div>
    </div>
    <div class="container-fluid d-grid justify-content-center">
      <nav class="navbar navbar-expand-auto navbar-light">
        <a 
        href="#"
        class="navbar-toggler border-0 text-decoration-none"
        data-bs-toggle="collapse"
        data-bs-target="#Play"
        aria-controls="Play"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="bi bi-play-circle-fill display-1 text-danger" style="color: rgb(255, 125, 94); text-shadow: rgba(255,41,62,0.95) 0px 0px 30px; -webkit-text-stroke-width: 2px;   
            -webkit-text-stroke-color: darkred;"></i>
      </a>
      </nav>
    </div>
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="Play">
        <ul class="navbar-nav text-center ms-auto  ">
              <li>
                <div class="row pt-5">
                  <div class="col-4 offset-4  ">
                    <div class="d-grid ">
                      <router-link to="/Register" style="color: rgb(255, 125, 94);" class="btn btn-dark text-start  rounded-4 btn-lg">Register</router-link>
                    </div>
                </div>
              </div>
              </li>
              <li>
                <div class="row  ">
                  <div class="col-4 offset-4 gy-4 ">
                    <div class="d-grid ">    
                        <router-link to="/login" style="color: rgb(255, 125, 94);" class="btn btn-dark text-start  rounded-4 btn-lg">Log in</router-link>
                    </div>
                </div>
              </div>
              </li> 
              <li>
                <div class="row  ">
                  <div class="col-4 offset-4 gy-4 ">
                    <div class="d-grid ">
                      <a  style="color: rgb(255, 125, 94);" class="btn btn-dark text-start  rounded-4 btn-lg" @click="enterAsGuest">Guest</a>
                    </div>
                </div>
                </div>
              </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  enterAsGuest() {
    this.$cookies.remove("loginToken");
    this.$cookies.remove("email");
    this.$cookies.remove("username");
    this.$cookies.set("guest", "true");
    this.$router.push({ name: "mainpage" });
  },
},
};
</script>

<style scoped>
.image {
  background-image: url(../assets/redbackground.png);
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
</style>