<template>
  <div>
    <div class="banner">
        <p class="banner__text">
            <span>さあ、デザインの旅へ。</span><br>
            日々のデザイン業務で便利な「おすすめスポット」をまとめています。
        </p>
        <img class="banner__image" src="https://akinening.github.io/bookmark/assets/location.svg" alt="map">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped lang="styl">
.banner
  position relative
  display inline-block
  width 612px
  height 164px
  background-color #FEBF1B
  border-radius 16px
  margin-top 32px
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
