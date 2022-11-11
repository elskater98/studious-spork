<template>
  <b-navbar fixed-top="true">
    <template #start>
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item tag="router-link" :to="{ path: '/login' }">
        <div class="buttons">
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>
