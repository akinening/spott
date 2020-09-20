<template>
  <div>
    <a class="card" v-for="(card, num) in cards" :href="card.url" :key="num" target="_blank">
        <img :src="card.img" :alt="card.title">
        <p>{{ card.title }}</p>
    </a>

    <a class="link" v-for="(link, num) in links" :href="link.url" :key="num" target="_blank">
      <p class="link__title">{{ link.title }}</p>
      <p class="link__url">{{ link.url }}</p>
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
          img: require('@/assets/image/icon-8.jpg'),
          title: 'ICON8 - アイコンやイラスト'
        },
        {
          url: 'https://stories.freepik.com/',
          img: require('@/assets/image/stories.jpg'),
          title: 'stories - 抽象めイラスト'
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
        },
        {
          url: 'https://www.ac-illust.com/',
          title: 'illustAC - イラスト素材集'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
