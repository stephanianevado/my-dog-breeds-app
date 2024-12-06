<template>
  <div>
    <a
      v-if="mode === 'alternative'"
      :href="href"
      target="_blank"
      :class="[
        'flex flex-row items-center space-x-2 rounded-[40px] w-40 p-1 bg-black hover:bg-hoverAlternative',
      ]">
      <div v-if="iconPosition === 'left' && icon">
        <component :is="icon" :color="color" size="40" />
      </div>
      <p class="text-white">
        <slot></slot>
      </p>

      <div v-if="iconPosition === 'right' && icon">
        <component :is="icon" :color="color" size="40" />
      </div>
    </a>
    <a
      v-else-if="mode === 'standard'"
      :href="href"
      target="_blank"
      class="flex flex-row justify-center items-center space-x-2 rounded-[8px] w-full px-6 py-4 bg-gray-50 hover:bg-hoverStandard z-10">
      <div v-if="iconPosition === 'left' && icon">
        <component :is="icon" :color="color" />
      </div>
      <p class="text-black">
        <slot></slot>
      </p>

      <div v-if="iconPosition === 'right' && icon">
        <component :is="icon" :color="color" />
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">

type Props = {
  mode: 'alternative' | 'standard',
  color: string,
  icon: object,
  href: string,
  iconPosition: 'left' | 'right',
}
defineProps<Props>()
</script>

