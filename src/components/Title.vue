<template>
  <div class="space-y-2">
    <h1
      class="underline underline-offset-8 decoration-pink-500 decoration-2 text-xl text-stone-700">
      {{ header }}
    </h1>
    <h2 class="fade-in-right text-4xl font-semibold text-gray-600">
      {{ subHeader }} &rarr;
    </h2>
  </div>
</template>

<script>
export default {
  name: 'TitleComponent',
  props: {
    header: {
      type: String,
      required: true,
    },
    subHeader: {
      type: String,
      required: true,
    },
  },
}
</script>
