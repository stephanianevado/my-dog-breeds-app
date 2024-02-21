<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-modal flex justify-center items-center">
    <div
      class="bg-white md:w-[620px] md:h-[420px] md:rounded-lg rounded-none flex justify-center items-center w-full h-full">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalBase',
}
</script>
