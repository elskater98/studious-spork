<template>
  <div class="container">
    <div class="center">
      <form @submit.prevent="">
        <div class="columns is-flex is-vcentered">
          <div class="column is-four-fifths">
            <b-input placeholder="Postal Code"
                     v-model="postalCode"
                     type="text"
                     icon="map-marker">
            </b-input>
          </div>
          <div class="column">
            <b-button native-type="submit" value="Login">Search</b-button>
          </div>
        </div>
      </form>
      <div class="mt-2 columns">
        <div class="column is-four-fifths">
          <ProductCard v-for="product in products" v-bind:key="product.id" v-bind:product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import ProductCard from "@/components/ProductCard";

export default {
  name: 'IndexPage',
  components: {ProductCard},
  data() {
    return {
      products: [{id: 1, name: "patata"}, {id: 2, name: "patata"}],
      postalCode: null
    }
  },
  async fetch() {
    await this.$axios.$get('/products?populate=postal_code,picture').then((res) => {
      this.products = res?.data;
    }).catch(err => this.$buefy.toast.open({
      message: "Error while retrieving products :(",
      type: "is-danger"
    }))
  }
}
</script>
