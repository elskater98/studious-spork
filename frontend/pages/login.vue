<template>
  <section>
    <div class="container">
      <form @submit.prevent="login">
        <div>
          <b-field label="Email">
            <b-input placeholder="Email"
                     v-model="username"
                     type="email"
                     icon="email"
                     icon-right="close-circle">
            </b-input>
          </b-field>
          <b-field label="Password">
            <b-input type="password" v-model="password" password-reveal/>
          </b-field>
          <b-button native-type="submit" value="Login">Submit</b-button>
        </div>

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
          this.$buefy.toast.open({
            message: "Welcome to our website!",
            type: "is-success"
          })
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
