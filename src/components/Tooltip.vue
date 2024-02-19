<template>
  <div
    @mouseenter="handleOnMouseEnter"
    @mouseleave="handleOnMouseLeave"
    class="cursor-pointer max-w-[350px]">
    <div v-if="isHovered" class="fade-in-up bg-gray-600 rounded-2xl relative">
      <p class="text-white font-semibold text-2xl px-4">{{ text }} &rarr;</p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ToolTip',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isHovered: false,
    }
  },
  methods: {
    handleOnMouseEnter() {
      this.isHovered = true
    },
    handleOnMouseLeave() {
      this.isHovered = false
    },
  },
}
</script>
