<script setup>
import IconBase from './IconBase.vue'
</script>

<template>
  <IconBase :size="size">
    <path
      d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
      :fill="color"
      :class="{ 'hover:fill-current': hoverColor }" />
  </IconBase>
</template>

<script>
export default {
  name: 'IconFacebook',
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
