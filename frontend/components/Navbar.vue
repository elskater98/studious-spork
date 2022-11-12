<template>
  <b-navbar>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <b-button icon-left="home">Home</b-button>
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item v-if="!isAuthenticated" tag="router-link" :to="{ path: '/login' }">
        <b-button icon-left="account">Login</b-button>
      </b-navbar-item>
      <b-navbar-item v-if="isAuthenticated">
        <b-button icon-left="account" @click.prevent="logout">Logout</b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "Navbar",
  methods: {
    async logout() {
      await this.$auth.logout();
      await this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style scoped>

</style>
