<template>
  <div class="container">
    <div class="hero">
      <Navbar/>
    </div>
    <div class="section">
      <Nuxt/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "default",
  components: {
    Navbar
  }
}
</script>

<style scoped>

</style>
