<script setup>
import { RouterLink } from 'vue-router'
import IconButton from '../common/iconButton/IconButton.vue'
import LinkButton from '../common/linkButton/LinkButton.vue'
import IconHamburger from '../icons/IconHamburger.vue'
import IconLink from '../icons/IconLink.vue'
import HeaderItems from './HeaderItems.vue'
import NavigationMenu from './NavigationMenu.vue'
</script>

<template>
  <div>
    <NavigationMenu v-if="open" :open="open" :close="closeMenu" />

    <header class="2xl:mx-[640px] md:mx-20 mx-4 my-6">
      <div class="flex md:flex-row flex-col md:justify-between items-center">
        <div class="md:flex hidden">
          <RouterLink to="/">
            <img
              alt="svg logo"
              class="logo"
              src="/images/logo.png"
              width="192"
              height="34" />
          </RouterLink>
        </div>
        <div class="md:flex hidden">
          <HeaderItems />
        </div>
        <div class="md:hidden flex self-end">
          <IconButton :icon="IconHamburger" :onClick="openMenu" />
        </div>
        <div
          v-for="item in items"
          :key="item.id"
          class="md:flex hidden text-lg">
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
  </div>
</template>

<script>
export default {
  name: 'NavigationHeader',
  data() {
    return {
      open: false,
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
    openMenu() {
      this.open = true
    },
    closeMenu() {
      this.open = false
    },
  },
  components: {
    RouterLink,
    IconButton,
    HeaderItems,
    NavigationMenu,
  },
}
</script>
