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
        },
        {
          url: 'https://www.photo-ac.com/',
          img: require('@/assets/image/podcast.png'),
          title: 'Photo AC'
        }
      ],
      links: [
        {
          url: 'https://stock.adobe.com/jp/free',
          title: 'Adobe Stock 無料コレクション'
        },
        {
          url: 'https://o-dan.net/ja/',
          title: 'O-DAN - 無料写真素材検索'
        },
        {
          url: 'https://imguma.com/',
          title: 'あっしゅくま - 画像圧縮'
        },
        {
          url: 'https://squoosh.app/',
          title: 'Squoosh - 画像圧縮'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
