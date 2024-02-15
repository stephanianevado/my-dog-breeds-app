<script setup>
import IconBase from './IconBase.vue'
</script>

<template>
  <IconBase :size="size">
    <path
      d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"
      :fill="color"
      :class="{ 'hover:fill-current': hoverColor }" />
  </IconBase>
</template>

<script>
export default {
  name: 'IconEmail',
  props: {
    size: {
      type: String || Number,
    },
    color: {
      type: String,
      default: '#000000',
    },
    hoverColor: {
      type: String,
      default: '',
    },
  },
}
</script>
