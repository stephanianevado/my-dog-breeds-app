<script setup>
import { RouterView } from 'vue-router'
import NavigationFooter from './components/navigation/NavigationFooter.vue'
import NavigationHeader from './components/navigation/NavigationHeader.vue'
</script>

<template>
  <div
    id="app"
    class="font-clash w-screen h-screen overflow-auto flex flex-col">
    <NavigationHeader />
    <main id="main" class="2xl:mx-96 2xl:my-24 md:mx-20 md:my-4 m-4 grow">
      <RouterView />
    </main>
    <NavigationFooter />
  </div>
</template>
