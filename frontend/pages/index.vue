<template>
  <div class="container">
    <div class="center">
      <form @submit.prevent="">
        <div class="columns is-flex is-vcentered">
          <div class="column is-four-fifths">
            <b-autocomplete rounded
                            placeholder="Postal Code"
                            :value="name"
                            :data="filterPostalCodes"
                            clearable
                            @select="option => selected = option"
                            icon="map-marker">
            </b-autocomplete>
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
      name: '',
      selected: null
    }
  },
  methods: {
    // https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
    async findByPostalCode() {
      if (this.selected === null) {
        await this.$axios.$get('/api/products?populate=postal_code,picture').then((res) => {
          this.products = res?.data.data;
        })
      } else {
        await this.$axios.get("/api/products?populate=postal_code,picture&filters[postal_code][municipality_code][$eq]=" + this.selected).then((res) => {
          this.products = res?.data.data;
        })
      }
    },
  },
  computed: {
    filterPostalCodes() {
      return this.availablePostalCodes.filter((option) => {
        return option.toString().toLowerCase().indexOf(this.name.toString().toLowerCase()) >= 0;
      })
    }
  },
  async fetch() {
    await this.$axios.$get('/api/products?populate=postal_code,picture').then((res) => {
      this.products = res?.data;
    }).catch(err => this.$buefy.toast.open({
      message: "Error while retrieving 'Products' :(",
      type: "is-danger"
    }));

    await this.$axios.get('/api/postal-codes').then((res) => {
      this.availablePostalCodes = res?.data?.data.map((i) => {
        return i.attributes.municipality_code
      });
    }).catch(err => this.$buefy.toast.open({
      message: "Error while retrieving 'Postal Codes' :(",
      type: "is-danger"
    }));
  }
}
</script>
