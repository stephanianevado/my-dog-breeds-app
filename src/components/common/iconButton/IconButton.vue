<script setup lang="ts">
import { defineComponent, h } from 'vue';

type Prop = {
  disabled?: boolean
  icon: object
  onClick: () => void
}
const props = withDefaults(defineProps<Prop>(), {
  disabled: false,
})

const handleClick = () => {
  if (!props.disabled && props.onClick) {
    props.onClick()
  }
}

const Icon = defineComponent({
  render() {
    return () => h(props.icon)
  }
})
</script>

<template>
  <button
    class="w-10 h-10 flex justify-center items-center"
    :disabled="disabled"
    @click="handleClick">
    <Icon />
    <slot></slot>
  </button>
</template>