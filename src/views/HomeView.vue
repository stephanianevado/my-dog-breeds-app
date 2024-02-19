<script setup>
import IcosahedronAnimation from '../components/animation/IcosahedronAnimation.vue'
import LinkButton from '../components/common/linkButton/LinkButton.vue'
import Dash from '../components/icons/IconDash.vue'
import IconEmail from '../components/icons/IconEmail.vue'
import IconGithub from '../components/icons/IconGithub.vue'
import IconLinkedin from '../components/icons/IconLinkedin.vue'
import ToolTip from '../components/Tooltip.vue'
</script>

<template>
  <div class="font-semibold flex lg:flex-row flex-col lg:space-y-0 space-y-6">
    <div class="space-y-6 lg:basis-[880px]">
      <div class="flex flex-row items-center space-x-1 text-gray-500">
        <Dash />
        <span>{{ completeName }}</span>
      </div>
      <h1 class="text-neutral-900 lg:text-7xl text-5xl">
        {{ introduction }}
      </h1>
      <div
        class="flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-4 items-center">
        <div v-for="item in items" :key="item.id">
          <LinkButton
            :href="item.href"
            :icon="item.icon"
            color="white"
            iconPosition="left"
            mode="alternative">
            {{ item.text }}
          </LinkButton>
        </div>
      </div>
    </div>

    <ToolTip text="I created this animation using pure CSS">
      <IcosahedronAnimation />
    </ToolTip>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      completeName: 'Stephania Nevado.',
      introduction:
        'Frontend developer, manager and nutritionist located in Sweden ✨',
      items: [
        {
          id: 'GITHUB',
          text: 'My GitHub',
          href: 'https://github.com/stephanianevado',
          icon: IconGithub,
        },
        {
          id: 'LINKEDIN',
          text: 'LinkedIn',
          href: 'https://www.linkedin.com/in/stephanianevado/',
          icon: IconLinkedin,
        },
        {
          id: 'EMAIL',
          text: "Let's chat",
          href: 'mailto:stephania.arantxa@gmail.com',
          icon: IconEmail,
        },
      ],
    }
  },
}
</script>
