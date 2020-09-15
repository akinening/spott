<template>
  <div>
    <a class="card" v-for="(card, num) in cards" :href="card.url" :key="num" target="_blank">
        <img :src="card.img" :alt="card.title">
        <p>{{ card.title }}</p>
    </a>

    <a class="link-list" v-for="(link, num) in links" :href="link.url" :key="num" target="_blank">
      {{ link.title }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Illust',
  data () {
    return {
      cards: [
        {
          url: 'https://icons8.jp/',
          img: 'https://akinening.github.io/bookmark/assets/having-job.png',
          title: 'ICON8 - アイコンやイラスト'
        },
        {
          url: 'https://www.ac-illust.com/',
          img: 'https://akinening.github.io/bookmark/assets/ac-illust.jpg',
          title: 'illustAC - イラスト素材集'
        }
      ],
      links: [
        {
          url: 'https://www.linustock.com/',
          title: 'Linustock - 線画イラスト'
        },
        {
          url: 'https://loosedrawing.com/',
          title: 'Loose Drawing - 手描き風の線画イラスト'
        },
        {
          url: 'https://undraw.co/illustrations',
          title: 'unDraw - 抽象めイラスト'
        }
      ]
    }
  }
}
</script>

<style scoped lang="styl">

</style>
