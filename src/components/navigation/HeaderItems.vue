<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="flex flex-wrap md:justify-center justify-start text-lg text-gray-400 font-semibold">
    <RouterLink
      v-for="item in items"
      :key="item.id"
      :to="item.href"
      class="transition-colors duration-300 hover:text-pink-500"
      :class="{
        'text-pink-500 underline': isActivePage(item.href),
      }">
      {{ item.title }}
    </RouterLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ id: 'DOGS', title: 'Dog Breeds', href: '/Dogs' }],
    }
  },
  methods: {
    isActivePage(href) {
      return this.$route.path === href
    },
  },
  components: { RouterLink },
}
</script>
