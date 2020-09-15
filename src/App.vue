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

.main {
    margin-left: 360px;
}

.banner {
    position: relative;
    display: inline-block;
    width: 612px;
    height: 164px;
    background-color: #FEBF1B;
    border-radius: 16px;
    margin-top: 32px;
    overflow: hidden;
}
.banner p {
    color: #fff;
    margin: 32px;
    width: 360px;
}
.banner p span {
    display: inline-block;
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: bold;
}
.banner img {
    position: absolute;
    top: -50px;
    right: -29px;
    width: 293px;
}
</style>
