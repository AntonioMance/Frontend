<template>
  <div class="home-page">
    <div class="list-container">
      <div class="game-button">
        <router-link to="/mainpage" >
          <img src="../assets/mainpage.jpeg" alt="" />
          <div class="text">
            Back to mainpage
          </div>
        </router-link>
      </div>
      <div class="game-button" @click="saveRoomInfo(4, 'League of Legends')">
        <img src="../assets/league.webp" alt="" />
        <div class="text">
          <p>League of Legends</p>
        </div>
      </div>
      <div class="game-button" @click="saveRoomInfo(5, 'Among us')">
        <img src="../assets/among_us.png" alt="" />
        <div class="text">
          <p>Among us</p>
        </div>
      </div>
      <div class="game-button" @click="saveRoomInfo(6, 'Apex legends')">
        <img src="../assets/apex_legends.png" alt="" />
        <div class="text">Apex Legends</div>
      </div>
      <div class="game-button" @click="saveRoomInfo(7, 'Fortnite')">
        <img src="../assets/fortnite.webp" alt="" />
        <div class="text">Fortnite</div>
      </div>
      <div class="game-button" @click="saveRoomInfo(8, 'Rocket league')">
        <img src="../assets/rocket_league.png" alt="" />
        <div class="text">Rocket League</div>
      </div>
      <div class="game-button" @click="saveRoomInfo(9, 'Sea of thieves')">
        <img src="../assets/sea_of_thieves.webp" alt="" />
        <div class="text">Sea Of Thieves</div>
      </div>
      <div class="game-button" @click="saveRoomInfo(10, 'Fps chess')">
        <img src="../assets/fps_chess.jpg" alt="" />
        <div class="text">Fps chess</div>
      </div>
      <div class="game-button" @click="saveRoomInfo(11, 'Rust')">
        <img src="../assets/rust.jpg" alt="" />
        <div class="text">Rust</div>
      </div>
      <div class="game-button" @click="saveRoomInfo(12, 'Minecraft')">
        <img src="../assets/minecraft.jpg" alt="" />
        <div class="text">Minecraft</div>
      </div>
      <div class="game-button" @click="saveRoomInfo(13, 'Valheim')">
        <img src="../assets/valheim.jpg" alt="" />
        <div class="text">Valheim</div>
      </div>
      <div class="game-button" @click="saveRoomInfo(14, 'Valorant')">
        <img src="../assets/valorant.jpg" alt="" />
        <div class="text">Valorant</div>
      </div>
      <div class="game-button" @click="saveRoomInfo(15, 'Dota 2')">
        <img src="../assets/dota2.jpg" alt="" />
        <div class="text">Dota2</div>
      </div>
      <div class="game-button" @click="saveRoomInfo(16, 'Fifa 23')">
        <img src="../assets/fifa_23.jpg" alt="" />
        <div class="text">Fifa 23</div>
      </div>
      <div class="game-button" @click="saveRoomInfo(17, 'Elden Ring')">
        <img src="../assets/elden_ring.jpg" alt="" />
        <div class="text">Elden Ring</div>
      </div>
    </div>
  </div>
</template>

<script>
import { globalVariable } from "../globalVariable.js";
export default {
  data() {
    return {

    }
  },
  methods: {
    saveRoomInfo(roomNumber, roomName) {
      globalVariable.setRoomName(roomName);
      globalVariable.setRoomNumber(roomNumber);
      this.$router.push({ name: "gamechat" });
    }
  }
}

</script>


<style scoped>
.list-container {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(9.2px);
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.home-page {
  background-image: url(../assets/mainpage.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh; 
}

.game-button {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: inline-block;
}
.game-button img {
  width: 1200px;
  height: 200px;
  object-fit: cover;
}

.game-button .text {
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: 50%;
  left: 52%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 34px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.game-button:hover {
  scale: 1.02;
  cursor: pointer;
}

</style>
