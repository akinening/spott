<template>
  <div>
    <a class="link-list" v-for="(link, num) in links" :href="link.url" :key="num" target="_blank">
      {{ link.title }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  data () {
    return {
      links: [
        {
          url: 'https://airbnb.design/lottie/',
          title: 'Lottie - SVGアニメーション'
        },
        {
          url: 'https://cavalry.scenegroup.co/',
          title: 'Cavalry - Motion作成ツール'
        },
        {
          url: 'https://app-ealing.com/',
          title: 'appealing. - UIアニメーション事例集'
        },
        {
          url: 'https://loading.io/',
          title: 'loading.io - ローディングアニメーション'
        },
        {
          url: 'https://iorama.studio/',
          title: 'looom - 手描きアニメ作成アプリ'
        },
        {
          url: 'https://www.framer.com/',
          title: 'Framer - プロトタイピングツール'
        },
        {
          url: 'https://www.drama.app/',
          title: 'Drama - プロトタイピングツール'
        }
      ]
    }
  }
}
</script>

<style scoped lang="styl">

</style>
