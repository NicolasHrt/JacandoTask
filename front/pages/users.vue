<template>
  <div class="app">
    <div class="user-fill">
      <div class="user-card" v-for="user in users" :key="user._id">
        <div class="user-name">{{ user.firstName }} {{ user.lastName }}</div>
        <div class="user-info">
          <div class="user-email">{{ user.email }}</div>
          <div class="user-gender">{{ user.gender }}</div>
        </div>
      </div>
    </div>
    <div class="page-arrow">
      <i v-if="this.page > 1" class="fa-solid fa-arrow-left fa-xl" @click="previousPage()"></i>
      <i v-if="this.page * this.limit < this.totalUser" class="fa-solid fa-arrow-right fa-xl" @click="nextPage()"></i>
    </div>
    {{ page }}
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get(
        "http://localhost:3000/api/user?page=1&limit=2"
      );
      //   console.log(response.users);
      return {
        users: response.users.users,
        totalUser: response.users.total,
      };
    } catch (err) {
      console.log(err.message);
    }
  },
  data() {
    return {
      page: 1,
      limit: 2,
    };
  },
  methods: {
    async nextPage() {
      if (this.page * this.limit < this.totalUser) {
        this.page += 1;
        let response = await this.$axios.$get(
          `http://localhost:3000/api/user?page=${this.page}&limit=${this.limit}`
        );
        this.users = response.users.users;
      }
    },
    async previousPage() {
      if (this.page > 1) {
        this.page -= 1;
        let response = await this.$axios.$get(
          `http://localhost:3000/api/user?page=${this.page}&limit=${this.limit}`
        );
        this.users = response.users.users;
      }
    },
  },
};
</script>
