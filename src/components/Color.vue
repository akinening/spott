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
  name: 'Color',
  data () {
    return {
      links: [
        {
          url: 'https://palx.jxnblk.com/',
          title: 'PALX - 自動でカラーシステムを生成'
        },
        {
          url: 'https://coolors.co/',
          title: 'Coolors - 5種類の色の組み合わせ'
        },
        {
          url: 'https://color.adobe.com/ja/create/color-wheel',
          title: 'Adobe Color - 色の組み合わせ'
        },
        {
          url: 'https://www.grabient.com/',
          title: 'Grabient - いい感じのグラデーションを生成'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
