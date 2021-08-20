<template>
  <div>
    <a class="link" v-for="(link, num) in links" :href="link.url" :key="num" target="_blank">
      <p class="link__title">{{ link.title }}</p>
      <p class="link__url">{{ link.url }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Graphic',
  data () {
    return {
      links: [
        {
          url: 'https://bannnner.com/',
          title: 'Bannnner.com - バナーデザイン'
        },
        {
          url: 'https://thumbnail-gallery.net/',
          title: 'SAMUNE - サムネデザイン'
        },
        {
          url: 'https://flyer-jp.com/',
          title: 'flyer archive - フライヤーのデザイン'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
