<script setup>
import Title from '../components/Title.vue'
import ActionButton from '../components/common/actionButton/ActionButton.vue'
import ModalBase from '../components/common/modal/ModalBase.vue'
import DogCharacteristics from '../components/dog/DogCharacteristics.vue'
import DogTemperament from '../components/dog/DogTemperament.vue'
import IconCircle from '../components/icons/IconCircle.vue'
import IconDog from '../components/icons/IconDog.vue'
</script>

<template>
  <div>
    <div v-if="currentBreed" class="space-y-10">
      <Title :header="currentBreed.name" :subHeader="currentBreed.bred_for" />
      <div
        class="flex flex-col justify-center md:w-1/2 w-full m-auto p-8 bg-white md:rounded-lg rounded-none space-y-10">
        <DogCharacteristics
          :origin="currentBreed.origin"
          :lifeSpan="currentBreed.life_span"
          :weight="currentBreed.weight.metric"
          :height="currentBreed.height.metric" />
        <DogTemperament :temperament="currentBreed.temperament" />
        <div class="flex self-end">
          <ActionButton
            :onClick="goBack"
            :icon="IconDog"
            iconPosition="left"
            hover="hoverStandard"
            mode="alternative"
            color="white">
            Go back
          </ActionButton>
        </div>
      </div>
    </div>
    <ModalBase v-else>
      <IconCircle />
      <p>{{ item.text }}</p>
    </ModalBase>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getBreed()
  },
  methods: {
    getBreed() {
      this.id = this.$route.params.id
      this.$store.dispatch('getBreed', this.id)
    },
    goBack() {
      this.$router.push('/dogs')
    },
  },
  computed: {
    currentBreed() {
      return this.$store.state.currentBreed
    },
  },
  data() {
    return {
      item: {
        text: 'Loading breed data...',
      },
    }
  },
}
</script>
