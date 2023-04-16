<template>
  <div class="container-fluid">
  <div class="container py-5">
    <div class="row">
      <div class="col-12 col-md-8 mx-auto">
        <h1 class="mb-4 text-info fw-bold">
          General chat
            <router-link to="/mainpage">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="aqua" class="bi bi-box-arrow-left mx-3" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
             </svg>
            </router-link>
        </h1>
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
                  <router-link :to="{ name: 'UserProfile', params: { username: message.author }}" class="text-decoration-none fw-bold">
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
</div>
</template>

<script>
import VueCookies from "vue-cookies";
export default {
  data() {
    return {
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
        const response = await fetch("http://localhost:3000/app/messages/99"); 
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
          roomNumber: 99,
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
  border-radius: 20px;
  padding: 12px;
  width: max-content;
}

.chat-messages .sender {
  margin-left: auto;
  background-color: rgb(159, 199, 255);
}

.container-fluid{
  display: grid;
  grid-template-rows: auto 1fr; 
  background-image: url(../assets/mainpage.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh; 
}
.card{
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>