<template>
  <div class="mt-2">
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">
          {{ product.name }}
        </div>
      </div>
      <div class="card-image">
        <figure class="image is-1by1">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object
  }
}
</script>

<style scoped>

</style>
