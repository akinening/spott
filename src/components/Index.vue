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
</style>
