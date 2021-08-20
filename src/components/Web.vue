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
  name: 'Web',
  data () {
    return {
      cards: [
        {
          url: 'https://partsdesign.net/',
          img: require('@/assets/image/parts.jpg'),
          title: 'Parts - パーツ別Webデザイン集'
        },
        {
          url: 'https://iro2.tokyo/',
          img: require('@/assets/image/iro-2.jpg'),
          title: 'アニメ, ゲーム, 同人'
        }
      ],
      links: [
        {
          url: 'https://muuuuu.org/',
          title: 'muuuuu.org - 縦長LP'
        },
        {
          url: 'https://bm.s5-style.com/',
          title: 'S5-Style - 国内LP'
        },
        {
          url: 'https://io3000.com/',
          title: 'io3000 - 国内LP'
        },
        {
          url: 'https://www.webdesignclip.com/',
          title: 'Web Design Clip - 国内LP'
        },
        {
          url: 'https://www.siteinspire.com/',
          title: 'SiteInspire - 海外LP'
        },
        {
          url: 'https://www.lapa.ninja/',
          title: 'lapa - 海外LP'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
