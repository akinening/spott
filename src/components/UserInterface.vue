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
  name: 'UserInterface',
  data () {
    return {
      cards: [
        {
          url: 'https://learnmobile.design/',
          img: require('@/assets/image/learn-mobile.jpg'),
          title: 'Mobileのデザインリソースまとめ'
        },
        {
          url: 'https://mobbin.design/',
          img: require('@/assets/image/mobbin.jpg'),
          title: 'Mobbin - Mobileのデザインパターン'
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
