<template>
  <div id="app">
    <global-menu />
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'
import GlobalMenu from '@/components/GlobalMenu'

export default {
  name: 'App',
  components: {
    GlobalMenu
  }
}
</script>

<style>
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

/* メイン */
.main {
    margin-left: 392px;
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
.article {
    margin: 48px 0 32px;
    font-size: 24px;
}

.link-list,
.card {
    display: inline-block;
    position: relative;
    width: 612px;
    min-height: 64px;
    padding: 12px 24px 12px 76px;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 12px;
    box-shadow: none;
    box-sizing: border-box;
    transition: box-shadow 0.25s ease 0s;
}
.link-list:hover,
.card {
    box-shadow: 0px 4px 24px rgba(0,0,0,0.08);
}
.link-list::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 24px;
    width: 40px;
    height: 40px;
    background-color: #FEBF1B;
    border-radius: 12px;
}
.card {
    width: 200px;
    padding: 16px;
    margin: 0 16px 32px 0;
    border-radius: 16px;
}
.card:hover {
    box-shadow: none;
}
.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 16px;
}
.card p {
    margin-top: 16px;
    font-size: 20px;
    font-weight: normal;
}
</style>
