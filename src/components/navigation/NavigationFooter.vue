<script setup>
import IconEmail from '../icons/IconEmail.vue'
import IconFacebook from '../icons/IconFacebook.vue'
import IconGithub from '../icons/IconGithub.vue'
import IconInstagram from '../icons/IconInstagram.vue'
import IconLine from '../icons/IconLine.vue'
import IconLinkedin from '../icons/IconLinkedin.vue'
</script>

<template>
  <footer class="2xl:mx-[640px] md:mx-20 mx-4 my-6 flex flex-col space-y-4">
    <IconLine />
    <div class="space-y-2 text-sm">
      <p>Copyright © {{ getCurrentYear() }} Stephania Nevado</p>
      <p>All rights reserved.</p>
    </div>
    <div
      class="flex flex-row space-x-4 items-center transition-colors duration-300 hover:text-blue-700">
      <a v-for="item in items" :key="item.id" :href="item.href" target="_blank">
        <component :is="item.icon" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'NavigationFooter',
  data() {
    return {
      items: [
        {
          id: 'GITHUB',
          href: 'https://github.com/stephanianevado',
          icon: IconGithub,
        },
        {
          id: 'LINKEDIN',
          href: 'https://www.linkedin.com/in/stephanianevado/',
          icon: IconLinkedin,
        },
        {
          id: 'INSTAGRAM',
          href: 'https://www.instagram.com/stephanianevado/',
          icon: IconInstagram,
        },
        {
          id: 'FACEBOOK',
          href: 'https://www.facebook.com/nevadostephania',
          icon: IconFacebook,
        },
        {
          id: 'EMAIL',
          href: 'mailto:stephania.arantxa@gmail.com',
          icon: IconEmail,
        },
      ],
    }
  },
  methods: {
    getCurrentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
