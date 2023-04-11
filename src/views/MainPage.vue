<template>
  <div>  
  <div >
<div class="home-page-user">
  <div class="container">
    <div class="row">
      <div class="col">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container">
            <h3 class="display-5 fw-bolder text-primary">LetsPlay</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-joystick me-3"
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
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link
                  v-if="!isGuest"
                  to="/MyProfile"
                  class="btn btn-danger rounded-1 btn-lg rounded-3"
                  type="submit"
                >
                  My profile
                </router-link>
                <span v-else class="btn btn-danger rounded-1 btn-lg rounded-3 disabled">
                  My profile
                </span>
                </li>
              </ul>
            
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="container border border-4 border-dark">
      <div class="row">
        <div class="col">
          <router-link
            to="/generalchat"
            class="btn btn-primary w-25 mb-2 mt-1"
            >General chat
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
        <div class="col"><router-link to="./gamelist">
          <button class="btn btn-primary w-25 mb-2 mt-1">
            Rooms
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
  </div>
</div>
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
};
</script>



<style>
.home-page-user , .home-page-guest {
background-image: url(../assets/slika2.jfif);
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
background-attachment: fixed;
min-height: 100vh; 
}
.navbar {
background-color: rgba(0, 0, 0, 0) !important;
}

.form-control {
background-color: #00bfff;
}
</style>

