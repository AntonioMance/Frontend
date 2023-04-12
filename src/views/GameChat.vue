<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12 col-md-8 mx-auto">
        <h1 class="mb-4">{{ roomName }}</h1>
        <div class="card">
          <div class="card-body chat-window">
            <ul class="list-unstyled chat-messages">
              <li
                v-for="(message, index) in messages"
                :key="index"
                class="message"
                :class="{
                  sender: message.author === this.$cookies.get('username'),
                }"
              >
                <div class="content">
                  <div>
                  <router-link :to="{ name: 'UserProfile', params: { username: message.author }}">
                    {{ message.author }}
                  </router-link>
                </div>
                  <div>{{ message.content }}</div>
                  <small>{{ formatDate(message.timestamp) }}</small>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="input-group mt-3">
          <input
            type="text"
            class="form-control"
            v-model="inputMessage"
            @keypress.enter="sendMessage"
            placeholder="Type your message..."
            :disabled="isGuest"

          />
          <button class="btn btn-primary" @click="sendMessage" :disabled="isGuest">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCookies from "vue-cookies";
import { globalVariable } from "../globalVariable.js";
export default {
  data() {
    return {
      roomNumber: globalVariable.roomNumber,
      roomName: globalVariable.roomName,
      inputMessage: "",
      messages: [],
    };
  },
   computed: {
    isGuest() {
      return this.$cookies.get("guest") === "true";
    },
  },
  mounted() {
    this.$cookies = VueCookies;
  },
  async created() {
    this.getMessages();
  },
  methods: {
    formatDate(val) {
      let date = new Date(val);
      if (val)
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
    },

    async getMessages() {
      try {
        const response = await fetch(`http://localhost:3000/app/messages/${this.roomNumber}`); 
        if (response.ok) {
          this.messages = await response.json();
        } else {
          console.error("Failed to fetch messages");
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    },

    async sendMessage() {
      const messageContent = this.inputMessage.trim();
      if (messageContent) {
        const newMessage = {
          sender: true,
          content: messageContent,
          timestamp: new Date().toISOString(),
          roomNumber: this.roomNumber, 
        };
        this.inputMessage = "";
        try {
          await fetch("http://localhost:3000/app/messages", {
            method: "POST",
            credentials: "include", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMessage),
          }).then(() => {
            this.getMessages();
          });

  
        } catch (error) {
          console.error("Error saving message:", error);
        }
      }
    },
  },
};
</script>

<style scoped>

.chat-messages {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 70vh;
  overflow-y: scroll;
}

.chat-messages li {
  background-color: rgb(202, 202, 255);
  border-radius: 15px;
  padding: 10px;
  width: max-content;
}

.chat-messages .sender {
  margin-left: auto;
  background-color: rgb(159, 199, 255);
}


</style>
