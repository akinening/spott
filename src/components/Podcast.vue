<template>
  <div>
    <a class="podcast" v-for="(link, num) in links" :href="link.url" :key="num" target="_blank">
      <img class="podcast__image" src="@/assets/image/podcast.png" alt="Podcast">
      <p class="podcast__title">{{ link.title }}</p>
      <div class="podcast__wave">
        <img src="@/assets/image/wave.svg" alt="wave">
        <p>元サイトで再生</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Podcast',
  data () {
    return {
      links: [
        {
          url: 'https://automagic.fm/',
          title: 'Automagic - 長谷川恭久氏によるデザイン話'
        },
        {
          url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9wb2RjYXN0LmhhaWppLmNvL2ZlZWQ?sa=X&ved=2ahUKEwiTy4fy9d7rAhUM0pQKHS3TAxgQ4aUDegQIARAC&hl=ja',
          title: 'Export.fm - 灰色ハイジさんによるPodcast'
        },
        {
          url: 'https://open.spotify.com/show/1ernnsEyZhdmeNa5V0cF2y?nd=1',
          title: 'DESIGN FM - 未視聴'
        },
        {
          url: 'https://rebuild.fm/',
          title: 'Rebuild.fm - Tech系Podcastの有名所'
        },
        {
          url: 'https://yatteiki.fm/',
          title: 'yatteiki.fm - Tech系Podcastの有名所2'
        },
        {
          url: 'https://podcasts.apple.com/jp/podcast/podpatch/id907442285',
          title: 'Podpatch - GoodPatchのPodcast'
        },
        {
          url: 'https://podcasts.apple.com/jp/podcast/designput-%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%97%E3%83%83%E3%83%88/id1460000663',
          title: 'Designput（デザインプット） - 未視聴'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">

.podcast
  display inline-block
  margin-bottom 8px
  padding 24px
  border-radius 12px
  box-shadow none
  transition box-shadow 0.25s ease 0s

  &:hover
    box-shadow 0px 4px 24px rgba(0,0,0,0.08)

  &__image
    position absolute
    border-radius 12px
    width 132px
    height 132px

  &__title
    position relative
    margin-left 158px
    padding-left 52px
    height 40px
    line-height 40px
    vertical-align middle
    font-size 16px
    font-weight bold

    &::before
      content ''
      position absolute
      left 0
      display block
      width 40px
      height 40px
      border-radius 50%
      background-color #FEBF1B

  &__wave
    position relative
    margin 20px 0 0 158px

    & > p
      position absolute
      top 16px
      left 162px
      display block
      text-align center
      width 160px
      padding 12px 0
      border-radius 12px
      background-color rgba(#fff, 0.8)
      font-weight bold
      font-size 12px
      line-height 16px
</style>
