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
  name: 'Picture',
  data () {
    return {
      cards: [
        {
          url: 'https://unsplash.com/',
          img: require('@/assets/image/unsplash.png'),
          title: 'Unsplash'
        }
      ],
      links: [
        {
          url: 'https://o-dan.net/ja/',
          title: 'O-DAN - 無料写真素材検索'
        },
        {
          url: 'https://graphicburger.com/backgrounds/',
          title: 'GRAPHICBURGER - 背景素材、アイコン、モックアップ等'
        },
        {
          url: 'https://jp.freepik.com/',
          title: 'freepik - 要ライセンス確認'
        },
        {
          url: 'https://ccphotosearch.com/',
          title: 'FlickrのCCライセンス画像検索'
        },
        {
          url: 'https://www.google.com/search?q=FFCU+image',
          title: 'FFCU でのGoogle検索結果'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
