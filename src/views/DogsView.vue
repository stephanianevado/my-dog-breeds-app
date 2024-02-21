<script setup>
import { RouterLink } from 'vue-router'
import Title from '../components/Title.vue'
import ModalBase from '../components/common/modal/ModalBase.vue'
import IconCircle from '../components/icons/IconCircle.vue'
</script>

<template>
  <div>
    <Title
      header="Because everyday is a Dog day"
      :subHeader="`TOTAL: ${dogBreeds.length}`" />
    <div v-if="dogBreeds.length" class="md:grid grid-cols-3">
      <RouterLink
        v-for="breed in dogBreeds"
        :key="breed.id"
        :to="`/dog/${breed.breed}/${breed.id}`"
        class="cursor-pointer">
        <img
          :src="breed.url"
          :alt="`Dog: ${breed.id}`"
          :width="breed.width"
          height="200" />
        <p>{{ breed.breed }}</p>
      </RouterLink>
    </div>

    <ModalBase v-else-if="!dogBreeds.length">
      <IconCircle />
      <p>{{ item.text }}</p>
    </ModalBase>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getBreeds()
  },
  methods: {
    getBreeds() {
      this.$store.dispatch('getBreeds')
    },
  },
  computed: {
    dogBreeds() {
      return this.$store.state.dogBreeds
    },
  },
  data() {
    return {
      item: {
        text: 'Loading breeds...',
      },
    }
  },
}
</script>
