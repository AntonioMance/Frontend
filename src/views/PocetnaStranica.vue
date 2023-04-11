<template>
  <div>
    <div class="container-fluid d-grid">
      <div class="row text-center">
        <div class="col">
          <h1 class="display-2 text-primary fw-bolder">Welcome</h1>
        </div>
        <h1 class="display-2 text-primary fw-bolder pb-5">LetsPlay!</h1>
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
        <i class="bi bi-play-circle-fill display-1 text-danger"></i>
        
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
                      <a class="btn btn-dark text-start  rounded-4 btn-lg text-primary" href="../Register">Register</a>
                    </div>
                </div>
              </div>
              </li>
              <li>
                <div class="row  ">
                  <div class="col-4 offset-4 gy-4 ">
                    <div class="d-grid ">
                      <a class="btn btn-dark text-start  rounded-4 btn-lg text-primary" href="../login">Log in</a>
                        
                    </div>
                </div>
              </div>
              </li> 
              <li>
                <div class="row  ">
                  <div class="col-4 offset-4 gy-4 ">
                    <div class="d-grid ">
                      <a class="btn btn-dark text-start  rounded-4 btn-lg text-primary" @click="enterAsGuest">Guest</a>
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