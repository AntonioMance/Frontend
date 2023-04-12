<template>
  <div>
    <li v-for="message in messages" :key="message._id">
      {{ message.content }}
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },

  methods: {
    async getMessages() {
      await fetch(`http://localhost:3000/app/messages/1`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.messages = data;
          console.log(data);
        });
    },
  },
  beforeMount() {
      this.getMessages();
  },
};
</script>