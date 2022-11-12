<template>
  <section>
    <div class="container">
      <form @submit.prevent="login">
        <b-field label="Email" horizontal>
          <b-input type="email" v-model="username"/>
        </b-field>

        <b-field label="Password" horizontal>
          <b-input type="password" v-model="password"/>
        </b-field>
        <b-button native-type="submit" value="Login"/>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      error: null,
      username: '',
      password: ''
    }
  }, methods: {
    async login() {
      event.preventDefault()
      try {
        await this.$auth.loginWith('local', {
          data: {
            "identifier": this.username,
            "password": this.password
          }
        }).then(() => {
          this.$router.push('/')
        })
      } catch (e) {
        this.error = 'Wrong user or password.'
      }
    }

  }
}
</script>

<style scoped>

</style>
