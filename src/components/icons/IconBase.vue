<script setup>
defineProps({
  size: {
    type: [String, Number],
    default: 20,
  },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <slot></slot>
  </svg>
</template>
