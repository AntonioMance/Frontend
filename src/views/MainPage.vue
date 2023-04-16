<template>
  <div class="home-page-user">
    <div class="main-content">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav class="navbar navbar-expand-lg bg-light">
              <div class="container">
                <h3 class="display-5 fw-bolder text-primary ">LetsPlay</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="aqua"
                  class="bi bi-joystick m-3 "
                  viewBox="0 0 16 16"
                >
                <path
                d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z"
              />
              <path
                d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z"
              />
                </svg>
                <button
                  class="navbar-toggler text-danger"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item" style="margin-left: 25px;">
                      <router-link
                        v-if="!isGuest"
                        to="/MyProfile"
                        class="btn btn-primary rounded-1 btn-lg rounded-3"
                        type="submit"
                      >
                        My profile
                      </router-link>
                      <span v-else class="btn btn-primary rounded-1 btn-lg rounded-3 invisible" >
                        My profile
                      </span>
                    </li>
                    
                  </ul>
                  <div style="margin-left: auto;">
                    <button v-if="!isGuest" @click="logout" class="btn btn-primary btn-lg">
                      Log out
                    </button>
                    <button v-else @click="redirectToRegister" class="btn btn-primary btn-lg">
                      Register
                    </button>
                </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <router-link
              to="/generalchat"
              class="btn btn-primary w-25 mb-2 mt-1"
            >
              General chat
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-chat-dots-fill h1"
              viewBox="0 0 16 16"
            >
            <path
              d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            />
          </svg>
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <router-link to="./gamelist">
          <button class="btn btn-primary w-25 mb-2 mt-1">
            Gaming Rooms
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-chat-dots-fill h1"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
              />
            </svg>
          </button>
        </router-link>
      </div>
    </div>
  </div>
    <footer class="mt-auto">
      <div class="container">
        <div class="row">
        <div class="col-md-4 text-center text-info">
          <h1 class="display-4 fw-bolder">General Chat</h1>
          <p class="fs-5 text">Join the converation about every game and enjoy the play</p>
        </div>
        <div class="col-md-4 text-center text-info">
          <h1 class="display-4 fw-bolder">Gaming rooms</h1>
          <p class="fs-5 text">Join the rooms and find the game you want to play</p>
        </div>
        <div class="col-md-4 text-center text-info">
          <h1 class="display-4 fw-bolder">My Profile</h1>
          <p class="fs-5 text">Costumise your profile and let the others see your status</p>
        </div>
      </div>
        <div class="row">
          <div class="col text-center text-danger">
            <p class="fs-5 text fw-bold">
              &copy; 2023 LetsPlay | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
</div>
</div>
</template>
<script>
export default {
  computed: {
    isGuest() {
      return this.$cookies.get("guest") === "true";
    },
  },
  methods: {
    logout() {
      this.$cookies.remove("username");
      this.$cookies.remove("email");
      this.$cookies.remove("loginToken");
      this.$router.push("/").then(() => {
      window.location.reload();
    });
  },

    redirectToRegister() {
      this.$router.push("/register").then(() => {
      window.location.reload();
    });
    },
  },
};
</script>

<style scoped>
.home-page-user , .home-page-guest {
display: grid;
grid-template-rows: auto 1fr; 
background-image: url(../assets/mainpage.jpeg);
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
background-attachment: fixed;
min-height: 100vh; 
}
.navbar {
background-color: rgba(17, 13, 13, 0) !important;
}
.bi-joystick {
  margin-bottom: 3px;
}
.main-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}
.navbar-toggler-icon{
  background-color:red;
}
</style>

