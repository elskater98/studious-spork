<template>
  <div class="container">
    <div class="center">
      <form @submit.prevent="">
        <div class="columns is-flex is-vcentered">
          <div class="column is-four-fifths">
            <b-input rounded
                     placeholder="Postal Code"
                     v-model="searchInput"
                     icon="map-marker">
            </b-input>
          </div>
          <div class="column">
            <b-button v-on:click="findByPostalCode">Search</b-button>
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
      products: [],
      availablePostalCodes: [],
      searchInput: '',
    }
  },
  methods: {
    // https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
    async findByPostalCode() {
      if (this.searchInput === '') {
        await this.$axios.$get('/api/products?populate=postal_code,picture').then((res) => {
          console.log(res.data.data)
          this.products = res?.data;
        })
      } else {
        await this.$axios.get("/api/products?populate=postal_code,picture&filters[postal_code][municipality_code][$eq]=" + this.searchInput).then((res) => {
          this.products = res?.data.data;
        })
      }
    },
  },
  async fetch() {
    await this.$axios.$get('/api/products?populate=postal_code,picture').then((res) => {
      this.products = res?.data;
    }).catch(err => this.$buefy.toast.open({
      message: "Error while retrieving 'Products' :(",
      type: "is-danger"
    }));
  }
}
</script>
