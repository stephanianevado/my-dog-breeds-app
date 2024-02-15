<script setup>
import { RouterLink } from 'vue-router'
import IconButton from '../common/iconButton/IconButton.vue'
import LinkButton from '../common/linkButton/LinkButton.vue'
import IconClose from '../icons/IconClose.vue'
import IconLink from '../icons/IconLink.vue'
import HeaderItems from './HeaderItems.vue'
</script>

<template>
  <header class="absolute top-0 w-full h-full bg-white text-lg">
    <div class="mx-4 my-6 flex flex-col space-y-14">
      <div class="md:hidden flex flex-row justify-between items-center">
        <RouterLink to="/">
          <img
            alt="svg logo"
            class="logo"
            src="/images/cat-logo.svg"
            width="40"
            height="40" />
        </RouterLink>
        <div class="self-center">
          <IconButton :icon="IconClose" :onClick="close" />
        </div>
      </div>
      <HeaderItems />
      <div v-for="item in items" :key="item.id">
        <LinkButton
          :href="item.href"
          :icon="item.icon"
          color="black"
          hover="hoverStandard"
          mode="standard"
          iconPosition="right">
          {{ item.text }}
        </LinkButton>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavigationMenu',
  props: {
    open: Boolean,
    close: Function,
  },
  data() {
    return {
      items: [
        {
          id: 'CV',
          href: '/documents/cv.pdf',
          text: 'Resume',
          icon: IconLink,
        },
      ],
    }
  },
  methods: {
    if(open) {
      return alert('is open:', open)
    },
  },
  components: {
    RouterLink,
    IconButton,
    HeaderItems,
    LinkButton,
  },
}
</script>
