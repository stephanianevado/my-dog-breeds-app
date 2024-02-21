<template>
  <div class="space-y-2">
    <h3 class="text-stone-700 font-semibold text-2xl">Temperament</h3>
    <div>
      <ul
        v-for="(value, index) in temperamentArray"
        :key="index"
        class="text-stone-900 text-lg">
        <li>{{ value }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DogTemperament',
  props: {
    temperament: {
      type: String,
      required: true,
    },
  },
  computed: {
    temperamentArray() {
      return this.temperament.split(', ')
    },
  },
}
</script>
