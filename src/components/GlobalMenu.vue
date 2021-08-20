<template>
    <aside class="side">
        <a href="./">
            <img class="logo" src="@/assets/image/logo.svg" alt="Spott">
        </a>
        <nav class="menu">
            <router-link to="/" class="menu__list">TOP</router-link>
            <router-link to="/system" class="menu__list">デザインシステム</router-link>
            <router-link to="/ui" class="menu__list">UI</router-link>
            <router-link to="/web" class="menu__list">Web</router-link>
            <router-link to="/graphic" class="menu__list">グラフィック</router-link>
            <router-link to="/icon" class="menu__list">アイコン</router-link>
            <router-link to="/illust" class="menu__list">イラスト</router-link>
            <router-link to="/picture" class="menu__list">写真</router-link>
            <router-link to="/color" class="menu__list">配色</router-link>
            <router-link to="/animation" class="menu__list">アニメーション</router-link>
            <router-link to="/podcast" class="menu__list">Podcast</router-link>
        </nav>
    </aside>
</template>

<script>
export default {
  name: 'GlobalMenu'
}
</script>

<style lang="stylus" scoped>
.side
  z-index 1
  position fixed
  top 0
  left 0
  width 360px
  height 100%
  background-color #111424

  @media screen and (max-width: 768px) {
    width 100%
    height 88px
  }

.logo
  width 160px
  margin 32px 0 0 105px

  @media screen and (max-width: 768px) {
    display none
  }

.menu
  display flex
  flex-direction column
  margin-top 48px
  width 255px
  float right

  @media screen and (max-width: 768px) {
    flex-direction row
    margin-top 24px
    width 100%
    float left
    overflow-x scroll

    &::-webkit-scrollbar {
      display none
    }
  }

  &__list
    position relative
    color #fff
    font-size 20px
    font-weight bold
    padding 13px 0 13px 32px
    text-decoration none

    @media screen and (max-width: 768px) {
      flex 0 0 auto
      margin 0 4px
      padding 8px 24px
    }

    &:hover:not(.router-link-exact-active)
      border-radius 100px
      background-color rgba(255, 255, 255, 0.2)
      transition background-color 0.25s

  .router-link-exact-active
    color #222
    background-color #fff
    border-radius 28px 0 0 28px

    @media screen and (max-width: 768px) {
      border-radius 100px
    }

    &::before,
    &::after
      content ''
      position absolute
      display block
      width 28px
      height 28px
      right 0
      background-image url('../assets/image/rounded.svg')
      background-size cover

      @media screen and (max-width: 768px) {
        display none
      }

    &::before
      top -28px

    &::after
      bottom -28px
      transform scale(1, -1)
</style>
