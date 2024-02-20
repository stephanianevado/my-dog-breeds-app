<template>
  <div>
    <h1>Dog Details</h1>
    <div v-if="currentBreed">
      <p>ID: {{ currentBreed.id }}</p>
      <p>Name: {{ currentBreed.name }}</p>
      <p>Origin: {{ currentBreed.origin }}</p>
      <p>Life span: {{ currentBreed.life_span }}</p>
      <p>Temperament: {{ currentBreed.temperament }}</p>
      <p>Bred for: {{ currentBreed.bred_for }}</p>
      <p>Weight: {{ currentBreed.weight.metric }}</p>
      <p>Height: {{ currentBreed.height.metric }}</p>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getBreed()
  },
  methods: {
    getBreed() {
      this.id = this.$route.params.id
      this.$store.dispatch('getBreed', this.id)
    },
  },
  computed: {
    currentBreed() {
      return this.$store.state.currentBreed
    },
  },
}
</script>
