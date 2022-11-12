<template>
  <div class="mt-2">
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">
          {{ this.product?.attributes?.name }}
        </div>
      </div>
      <div class="card-image">
        <figure class="image is-square">
          <img :src="baseUrl+this.product?.attributes?.picture?.data?.attributes?.formats?.small?.url">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <b-taglist v-for="postaCode in product?.attributes?.postal_code?.data" v-bind:key="postaCode.id"
                     v-bind:postalCode="postaCode">
            <b-tag type="is-info">{{ postaCode.attributes.municipality_code }}</b-tag>
          </b-taglist>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object
  }, data() {
    return {baseUrl: process.env.PUBLIC_BASE_URL || 'http://localhost:1337'}
  }

}
</script>

<style scoped>

</style>
