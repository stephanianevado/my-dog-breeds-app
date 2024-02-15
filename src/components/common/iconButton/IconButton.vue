<template>
  <button
    class="w-10 h-10 flex justify-center items-center"
    :disabled="disabled"
    @click="handleClick">
    <Icon />
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    disabled: Boolean,
    icon: Object,
    onClick: Function,
  },

  methods: {
    handleClick() {
      if (!this.disabled && this.onClick) {
        this.onClick()
      }
    },
  },
  components: {
    Icon: {
      render(h) {
        return h(this.$parent.icon)
      },
    },
  },
}
</script>
