<template>
  <div class="container main-content">
      <h3>User profile:</h3>
      <h4>Game list:</h4>
      <div class="game-list" v-for="game in gameList" :key="game">
        {{ game }}
      </div>
      <h4>User status:</h4>
      <p>{{ statusText }}</p>
        <div class="follow-list">
          <h3>Follow List:</h3>
          <ul>
            <li v-for="(username, index) in followList" :key="index">
              {{ username }}
            </li>
          </ul>
      </div>
  <div>
    <h3>Availability</h3>
    <ul>
      <li v-for="(time, index) in availability" :key="index">
        {{ time.start }} - {{ time.end }}
      </li>
    </ul>
  </div>

  <h1>people played with:</h1>
   <p>{{ peoplePlayedWith }}</p>
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
    
  },
};
</script>


<style scoped>


.main-content {
  background-color: #8ecae6;
}



</style>