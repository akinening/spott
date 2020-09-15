<template>
  <div id="app">
    <global-menu />
    <router-view class="main" />
  </div>
</template>

<script>
import GlobalMenu from '@/components/GlobalMenu'

export default {
  name: 'App',
  components: {
    GlobalMenu
  }
}
</script>

<style lang="styl">
body {
  font-family:
    "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
  color: #333;
  overscroll-behavior: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main
    margin-top 32px
    margin-left calc(360px + 32px)

</style>
