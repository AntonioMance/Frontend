<template>
  <div class="container-fluid">
    <div class="container header sticky-top">
      <nav class="navbar navbar-expand-auto navbar-light">
        <h1 class="fw-bolder text-danger">
          User profile
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-person-square h1 text-primary"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"
            />
          </svg>
        </h1>
        <button
          class="navbar-toggler bg-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#header"
          aria-controls="header"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="header">
          <ul class="navbar-nav text-end ms-auto">
            <li>
              <a class="nav-link" href="../mainpage"
                ><h5 class="text-info fw-bold">
                  Back to mainpage
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="aqua"
                    class="bi bi-house h5 text-light"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"
                    />
                  </svg></h5
              ></a>
            </li>
            <li>
                ><h5 class="text-info fw-bold click"  @click="logout">
                  Log out
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="aqua"
                    class="bi bi-box-arrow-right h5 text-light"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg></h5
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  <div class="container main-content">
      <h3>Gamelist:</h3>
        <div class="game-list " v-for="game in gameList" :key="game">
          <li class="fs-3 text">
            {{ game }}
          </li> 
        </div>
      <h3> User status:</h3>
      <p class="fs-3 text">{{ statusText }}</p>
        <div class="follow-list">
          <h3 >Follow List:</h3>
          <ul>
            <li class="fs-4 text fw-bold" v-for="(username, index) in followList" :key="index">
              {{ username }}
            </li>
          </ul>
      </div>
      <div>
    <h3>Availability</h3>
    <ul class="list-group w-25">
      <li class="list-group-item mb-2 " v-for="(time, index) in availability" :key="index">
        {{ time.start }} - {{ time.end }}
      </li>
    </ul>
  </div>

  <h1>people played with:</h1>
  <p class="fs-3 text fw-bold">{{ peoplePlayedWith }}</p>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      gameList: [],
      statusText: "Unknown", 
      followList: [],
      availability: [],
      peoplePlayedWith: 0,
    };
  },
  async created() {
    const username = this.$route.params.username;
    this.getMyGameList(username);
    this.displayStatus(username);
    this.getFollowList(username);
    this.getAvailability(username);
    this.getPeoplePlayedWith(username);
    
  },
  methods: {
    async getMyGameList(username) {
        await fetch(`http://localhost:3000/app/users/getGames/${username}`, {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          this.gameList = data;
          console.log(this.gameList);
        })
        .catch((error) => {
          console.error("Error getting game list:", error);
        });
    },
async changeStatus(status) {
      try {
        const response = await fetch("http://localhost:3000/app/users/AddStatus", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: status }),
        });

        if (response.ok) {
          console.log("Status changed successfully");
          this.displayStatus(); 
        } else {
          console.log("Error changing status");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },

    async displayStatus(username) {
      try {
        const response = await fetch(`http://localhost:3000/app/users/Getstatus/${username}`, {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          const data = await response.json();
          switch (data.status) {
            case 1:
              this.statusText = "Online";
              break;
            case 2:
              this.statusText = "Idle";
              break;
            case 3:
              this.statusText = "Away";
              break;
            case 4:
              this.statusText = "Offline";
              break;
            default:
              this.statusText = "Unknown";
          }
        } else {
          console.log("Error getting status");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }, 
    async getFollowList(username) {
  try {
    const response = await fetch(`http://localhost:3000/app/users/getFollowList/${username}`, {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const data = await response.json();
      this.followList = data;
    } else {
      console.log("Error getting follow list");
    }
  } catch (error) {
    console.error("Error:", error);
  }
},
async getAvailability(username) {
      try {
        const response = await fetch(`http://localhost:3000/app/users/getAvailability/${username}`, {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const data = await response.json();
          this.availability = data;
        } else {
          console.log("Error getting availability");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
      async getPeoplePlayedWith(username) {
    try {
      const response = await fetch(`http://localhost:3000/app/users/getPeoplePlayedWith/${username}`, {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        this.peoplePlayedWith = data.peoplePlayedWith;
      } else {
        console.log("Error getting people played with");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },

  logout() {
      this.$cookies.remove("username");
      this.$cookies.remove("email");
      this.$cookies.remove("loginToken");
      this.$router.push("/").then(() => {
        window.location.reload();
      });
    },
    
  },
};
</script>


<style scoped>
.container-fluid{
  display: grid;
  grid-template-rows: auto 1fr;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh; 
  background-color: #023e7d;
}

.main-content {
  background-color: #8ecae6;
}
.click{
  cursor: pointer;
}


</style>