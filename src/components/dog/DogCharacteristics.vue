<template>
  <div class="space-y-">
    <h3 class="text-stone-700 font-semibold text-2xl">Characteristics</h3>
    <ul class="text-stone-900 text-lg">
      <li>Origin: {{ origin ? origin : 'Unknown' }}</li>
      <li>Life span: {{ lifeSpan }}</li>
      <li>Weight: {{ weight }} kg</li>
      <li>Height: {{ height }} cm</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DogCharacteristics',
  props: {
    origin: String,
    lifeSpan: String,
    weight: String,
    height: String,
  },
}
</script>
