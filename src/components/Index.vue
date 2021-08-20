<template>
  <div>
    <div class="banner">
        <p class="banner__text">
            <span>さあ、デザインの旅へ。</span><br>
            日々のデザイン業務で便利な「おすすめスポット」をまとめています。
        </p>
        <img class="banner__image" src="@/assets/image/location.svg" alt="map">
    </div>

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
  name: 'Index',
  data () {
    return {
      cards: [
        {
          url: 'https://dribbble.com/',
          img: require('@/assets/image/dribbble.jpg'),
          title: 'dribbble'
        },
        {
          url: 'https://www.pinterest.jp/',
          img: require('@/assets/image/pinterest.jpg'),
          title: 'Pinterest'
        }
      ],
      links: [
        {
          url: 'https://www.figma.com/resources/',
          title: 'Figma Resources'
        },
        {
          url: 'https://www.evernote.design/',
          title: 'All in One Bookmark Links'
        },
        {
          url: 'https://www.designresourc.es/',
          title: 'いいね順のDesign Resources'
        },
        {
          url: 'https://www.designnotes.co/',
          title: 'Design Resource一覧'
        },
        {
          url: 'https://www.uplabs.com/',
          title: 'uplabs - デザインファイル共有サイト'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.banner
  position relative
  display inline-block
  width 100%
  max-width 612px
  height 164px
  margin-bottom 32px
  background-color #FEBF1B
  border-radius 16px
  overflow hidden

  &__text
    color #fff
    margin 32px
    width 360px

    & > span
      display inline-block
      margin-bottom 8px
      font-size 24px
      font-weight bold

  &__image
      position absolute
      top -50px
      right -29px
      width 293px

</style>
