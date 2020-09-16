<template>
  <div>
    <div class="banner">
        <p class="banner__text">
            <span>さあ、デザインの旅へ。</span><br>
            日々のデザイン業務で便利な「おすすめスポット」をまとめています。
        </p>
        <img class="banner__image" src="https://akinening.github.io/bookmark/assets/location.svg" alt="map">
    </div>

    <a class="card" href="https://dribbble.com/" target="_blank">
        <img src="https://akinening.github.io/spott/src/assets/image/dribbble.jpg" alt="dribbble">
        <p>dribbble</p>
    </a>
    <a class="card" href="https://www.pinterest.jp/" target="_blank">
        <img src="https://s.pinimg.com/images/facebook_share_image.png"
            alt="pinterest">
        <p>Pinterest</p>
    </a>
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
