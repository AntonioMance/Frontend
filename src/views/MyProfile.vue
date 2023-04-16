<template>
  <div class="background">
    <div class="container sticky-top">
      <nav class="navbar navbar-expand-auto navbar-light">
        <h1 class="fw-bolder" style="color: rgb(255, 125, 94); text-shadow: rgba(255,41,62,0.95) 0px 0px 30px; -webkit-text-stroke-width: 2px;   
            -webkit-text-stroke-color: darkred;">
          My profile
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
        <button style="background-color: rgb(15, 110, 255);"
          class="navbar-toggler text-info "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#header"
          aria-controls="header"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-white"></span>
        </button>
        <div class="collapse navbar-collapse" id="header">
          <ul class="navbar-nav text-end ms-auto">
            <li>
                <router-link class="nav-link" to="../mainpage">
                  <h5 class="text-info fw-bold">
                    Back to home
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
                    </svg>
                  </h5>
                </router-link>

            </li>
            <li>
              >
              <h5 class="text-info fw-bold click" @click="logout">
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
                </svg>
              </h5>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="container main-content">
      <div class="input-group w-25 pt-3">
        <input style="background-color: gainsboro;"
          type="text"
          class="form-control"
          placeholder="Add game"
          v-model="addGameInput"
        />
        <button class="btn btn-outline-primary" @click="($event) => addGame()">
          +
        </button>
      </div>

      <div class="input-group my-3 w-25">
        <input style="background-color: gainsboro;"
          type="text"
          class="form-control"
          placeholder="Remove game"
          v-model="removeGameInput"
        />
        <button
          class="btn btn-outline-danger"
          @click="($event) => removeGame(removeGameInput)"
        >
          -
        </button>
      </div>
      <h3>My gamelist:</h3>
      <div class="game-list" v-for="game in gameList" :key="game">
        <li class="fs-3 text">
          {{ game }}
        </li>
      </div>
      <div>
        <h3>Add status:</h3>
        <div class="btn-group mb-3" role="group">
          <button class="btn btn-outline-success" @click="changeStatus(1)">
            Online
          </button>
          <button class="btn btn-outline-warning" @click="changeStatus(2)">
            Idle
          </button>
          <button class="btn btn-outline-danger" @click="changeStatus(3)">
            Away
          </button>
          <button class="btn btn-outline-secondary" @click="changeStatus(4)">
            Offline
          </button>
        </div>
        <h3>Status:</h3>
        <p class="fs-4 text fw-bold">{{ statusText }}</p>
      </div>

      <div class="row">
        <div class="col">
          <div class="form-group form-inline btn-group mb-2 mt-2" role="group">
            <input style="background-color: gainsboro;"
              type="text"
              v-model="usernameToFollow"
              class="form-control rounded-2 input-1"
              placeholder="Follow"
            />
            <button
              type="button"
              class="btn btn-dark rounded"
              @click="followUser"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-person-add"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                />
                <path
                  d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="form-group form-inline btn-group mb-3 mt-1" role="group">
            <input style="background-color: gainsboro;"
              type="text"
              v-model="usernameToUnfollow"
              class="form-control rounded-2"
              placeholder="Unfollow"
            />
            <button
              type="button"
              class="btn btn-dark rounded"
              @click="unfollowUser"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-person-fill-dash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                />
                <path
                  d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="follow-list">
        <h3>Follow List</h3>
        <ul>
          <li
            class="fs-4 text fw-bold"
            v-for="(username, index) in followList"
            :key="index"
          >
            {{ username }}
          </li>
        </ul>
      </div>

      <div>
        <h3>Add Availability</h3>
        <div class="input-group my-3">
          <input style="background-color: gainsboro;"
            type="time"
            class="form-control"
            v-model="startTime"
            placeholder="Start time"
          />
          <input style="background-color: gainsboro;"
            type="time"
            class="form-control"
            v-model="endTime"
            placeholder="End time"
          />
          <button class="btn btn-outline-primary" @click="addAvailability">
            Add
          </button>
        </div>
      </div>

      <div>
        <h3>Availability</h3>
        <ul class="list-group w-25">
          <li style="background-color: gainsboro;"
            class="list-group-item d-flex justify-content-between align-items-center mb-2"
            v-for="(time, index) in availability"
            :key="index"
          >
            {{ time.start }} - {{ time.end }}
            <button
              class="btn btn-danger btn-sm"
              @click="removeAvailability(index)"
            >
              Remove
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
                />
                <path
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>

      <div>
        <h2>User Messages:</h2>
        <ul class="list-group w-50">
          <li
            class="list-group-item" style="background-color: gainsboro;"
            v-for="(message, index) in userMessages"
            :key="index"
          >
            {{ message.content }} ({{ formatTimestamp(message.timestamp) }})
          </li>
        </ul>
      </div>

      <div>
        <h3>People Played With:</h3>
        <div class="input-group my-3 w-25">
          <input style="background-color: gainsboro;"
            type="number"
            class="form-control"
            v-model.number="peoplePlayedWithInput"
            placeholder="Update people played with"
          />
          <button
            class="btn btn-outline-primary"
            @click="updatePeoplePlayedWith(peoplePlayedWithInput)"
          >
            Submit
          </button>
        </div>
        <p class="fs-3 text fw-bold">{{ peoplePlayedWith }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameList: [],
      addGameInput: "",
      removeGameInput: "",
      statusText: "Unknown",
      usernameToFollow: "",
      usernameToUnfollow: "",

      followList: [],
      startTime: "",
      endTime: "",
      availability: [],
      userMessages: [],
      peoplePlayedWith: 0,
      peoplePlayedWithInput: null,
    };
  },
  async created() {
    this.getMyGameList();
    this.displayStatus();
    this.getFollowList();
    this.getAvailability();
    this.getUserMessages();
    this.getPeoplePlayedWith();
  },
  methods: {
    async getMyGameList() {
      await fetch(`https://webapps-backend.onrender.com/app/users/getGames`, {
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

    async addGame() {
      try {
        const res = await fetch(
          `https://webapps-backend.onrender.com/app/users/addGame/${this.addGameInput}`,
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (res.status === 200 && res.statusText === "OK") {
          setTimeout(() => {
            this.getMyGameList();
          }, 100);
        } else {
          try {
            const data = await res.json();
            this.gameList = data;
            console.log(this.gameList);
            setTimeout(() => {
              this.getMyGameList();
            }, 100);
          } catch (error) {
            console.error("Error parsing JSON response:", error);
          }
        }
      } catch (error) {
        console.error("Error sending request:", error);
      }
    },

    async removeGame(gameName) {
      try {
        const res = await fetch(
          `https://webapps-backend.onrender.com/app/users/removeGame/${gameName}`,
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (res.status === 200 && res.statusText === "OK") {
          this.getMyGameList();
        } else {
          try {
            const data = await res.json();
            this.gameList = data;
            console.log(this.gameList);
            setTimeout(() => {
              this.getMyGameList();
            }, 100);
          } catch (error) {
            console.error("Error parsing JSON response:", error);
          }
        }
      } catch (error) {
        console.error("Error sending request:", error);
      }
    },
    async changeStatus(status) {
      try {
        const response = await fetch(
          "https://webapps-backend.onrender.com/app/users/AddStatus",
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: status }),
          }
        );

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

    async displayStatus() {
      try {
        const response = await fetch(
          "https://webapps-backend.onrender.com/app/users/Getstatus",
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );
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

    async followUser() {
      try {
        const response = await fetch(
          `https://webapps-backend.onrender.com/app/users/follow/${this.usernameToFollow}`,
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.ok) {
          console.log("User followed successfully");
          this.followList.push(this.usernameToFollow);
          this.usernameToFollow = "";
        } else {
          console.log("Error following user");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },

    async unfollowUser() {
      try {
        const response = await fetch(
          `https://webapps-backend.onrender.com/app/users/unfollow/${this.usernameToUnfollow}`,
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.ok) {
          console.log("User unfollowed successfully");
          const userIndex = this.followList.indexOf(this.usernameToUnfollow);
          if (userIndex !== -1) {
            this.followList.splice(userIndex, 1);
          }
          this.usernameToUnfollow = "";
        } else {
          console.log("Error unfollowing user");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },

    async getFollowList() {
      try {
        const response = await fetch(
          "https://webapps-backend.onrender.com/app/users/getFollowList",
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );

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

    async getAvailability() {
      try {
        const response = await fetch(
          "https://webapps-backend.onrender.com/app/users/getAvailability",
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );

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

    async addAvailability() {
      if (this.startTime && this.endTime) {
        try {
          const response = await fetch(
            "https://webapps-backend.onrender.com/app/users/addAvailability",
            {
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                start: this.startTime,
                end: this.endTime,
              }),
            }
          );

          if (response.ok) {
            console.log("Availability added successfully");
            this.availability.push({
              start: this.startTime,
              end: this.endTime,
            });
            this.startTime = "";
            this.endTime = "";
          } else {
            console.log("Error adding availability");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    },
    async removeAvailability(index) {
      const availabilityToRemove = this.availability[index];
      try {
        const response = await fetch(
          "https://webapps-backend.onrender.com/app/users/removeAvailability",
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(availabilityToRemove),
          }
        );

        if (response.ok) {
          console.log("Availability removed successfully");
          this.availability.splice(index, 1);
        } else {
          console.log("Error removing availability");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
    async getUserMessages() {
      try {
        const response = await fetch(
          "https://webapps-backend.onrender.com/app/users/getUserMessages",
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.ok) {
          const data = await response.json();
          this.userMessages = data;
        } else {
          console.log("Error getting user messages");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },

    formatTimestamp(timestamp) {
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");

      return `${year}-${month}-${day} ${hours}:${minutes}`;
    },

    async updatePeoplePlayedWith(value) {
      try {
        const response = await fetch(
          "https://webapps-backend.onrender.com/app/users/updatePeoplePlayedWith",
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ peoplePlayedWith: value }),
          }
        );

        if (response.ok) {
          console.log("People played with updated successfully");
          this.getPeoplePlayedWith();
          this.peoplePlayedWithInput = null;
        } else {
          console.log("Error updating people played with");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },

    async getPeoplePlayedWith() {
      try {
        const response = await fetch(
          "https://webapps-backend.onrender.com/app/users/getPeoplePlayedWith",
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );

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
.background {
  display: grid;
  grid-template-rows: auto 1fr;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh;
  background-image: url(../assets/mainpage.png);
}
body {
  background-size: cover;
}.main-content {

  color: lightblue;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.click {
  cursor: pointer;
}
</style>
