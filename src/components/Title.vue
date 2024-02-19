<template>
  <div>
    <h1>{{ header }}</h1>
    <h2 class="fade-in-right">{{ subHeader }} &rarr;</h2>
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
