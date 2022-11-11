<template>
  <Navbar/>
</template>

<script>

import Navbar from "~/components/Navbar";

export default {
  auth: 'guest',
  name: 'IndexPage',
  components: {
    Navbar
  }
}
</script>
