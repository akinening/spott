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
          url: 'https://glyphsearch.com/',
          title: 'GlyphSearch - 複数サイトの一括検索'
        },
        {
          url: 'https://material.io/resources/icons/?style=baseline',
          title: 'Material Design'
        },
        {
          url: 'https://fontawesome.com/cheatsheet',
          title: 'Font Awesome'
        },
        {
          url: 'https://icons.getbootstrap.com/',
          title: 'Bootstrap Icon'
        },
        {
          url: 'https://systemuicons.com/',
          title: 'System UIcons'
        },
        {
          url: 'https://icomoon.io/app/#/select',
          title: 'IcoMoon Free'
        },
        {
          url: 'https://icooon-mono.com/',
          title: 'ICOOON MONO - フリーアイコン集'
        }
      ]
    }
  }
}
</script>

<style scoped lang="styl">

</style>
