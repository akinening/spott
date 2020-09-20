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
  name: 'UserInterface',
  data () {
    return {
      cards: [
        {
          url: 'https://mobbin.design/',
          img: require('@/assets/image/mobbin.jpg'),
          title: 'Mobbin - Mobileのデザインパターン'
        },
        {
          url: 'https://consim.design/',
          img: require('@/assets/image/consim.jpg'),
          title: 'consim - iOSとAndroidのUI比較'
        }
      ],
      links: [
        {
          url: 'https://learnmobile.design/',
          title: 'Mobileのデザインリソースまとめ'
        },
        {
          url: 'https://www.uisources.com/apps',
          title: 'UISOURCES - Mobile UIまとめ(中華系もアリ)'
        },
        {
          url: 'https://uimovement.com/',
          title: 'UIMovement - UIアニメーションまとめ'
        },
        {
          url: 'https://ui8.net/',
          title: 'UI8 - UI Kit販売サイト'
        },
        {
          url: 'https://www.pttrns.com/',
          title: 'Pttrns - アプリのUIスクショまとめ'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
