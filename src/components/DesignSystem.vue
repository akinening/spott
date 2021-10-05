<template>
  <div>
    <a class="card" v-for="(card, num) in cards" :href="card.url" :key="`first-${num}`" target="_blank">
        <img :src="card.img" :alt="card.title">
        <p>{{ card.title }}</p>
    </a>

    <a class="link" v-for="(link, num) in links" :href="link.url" :key="`second-${num}`" target="_blank">
      <p class="link__title">{{ link.title }}</p>
      <p class="link__url">{{ link.url }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'DesignSystem',
  data () {
    return {
      cards: [
        {
          url: 'https://adele.uxpin.com/',
          img: require('@/assets/image/adele.jpg'),
          title: 'Adele - 各企業のシステム一覧'
        },
        {
          url: 'https://designsystemsforfigma.com/',
          img: require('@/assets/image/figma.jpg'),
          title: 'Figmaで公開されているもの一覧'
        },
        {
          url: 'https://www.designsystems.com/open-design-systems/',
          img: 'https://images.ctfassets.net/7jw9uvgmirvi/5a15Ibf9FLqROCcRHaWL5X/022b34dcda4d52970ff01e784fa6914d/home_OG.png?w=600',
          title: '各社のFigmaファイル事例'
        }
      ],
      links: [
        {
          url: 'https://smarthr.design/',
          title: 'SmartHR Design System'
        },
        {
          url: 'https://ant.design/',
          title: 'Ant Design - Alibaba'
        },
        {
          url: 'https://primer.style/',
          title: 'Primer - GitHub'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
