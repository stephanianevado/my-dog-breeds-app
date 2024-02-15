<template>
  <svg
    :width="width"
    height="4"
    :viewBox="'0 0 ' + width + ' 4'"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path :d="'M0 2H' + width" :stroke="color" stroke-width="4" opacity="0.1" />
  </svg>
</template>

<script>
export default {
  name: 'IconLine',
  data() {
    return {
      width: 1280,
    }
  },
  props: {
    color: {
      type: String,
      default: '#141313',
    },
  },
  mounted() {
    this.setWidth()
    window.addEventListener('resize', this.setWidth)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setWidth)
  },
  methods: {
    setWidth() {
      const box = document.getElementById('main')
      if (box) {
        this.width = box.offsetWidth
      }
    },
  },
}
</script>
