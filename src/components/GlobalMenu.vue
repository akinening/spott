<template>
    <aside class="side">
        <a href="./">
            <img class="logo" src="https://akinening.github.io/bookmark/assets/logo.svg" alt="Spott">
        </a>
        <nav class="menu">
            <a class="menu-list active" href="./">TOP</a>
            <a class="menu-list" href="./icon">アイコン</a>
            <a class="menu-list" href="./illust">イラスト</a>
            <a class="menu-list" href="./color">配色</a>
            <a class="menu-list" href="./animation">アニメーション</a>
            <a class="menu-list" href="https://www.notion.so/akinen/Spott-79dc82356a2a4a15b52a696a9fbf8315">その他</a>
        </nav>
    </aside>
</template>

<script>
export default {
  name: 'GlobalMenu'
}
</script>

<style scoped>
.side {
    position: fixed;
    top: 0;
    left: 0;
    width: 360px;
    height: 100vh;
    background-color: #111424;
}
.logo {
    width: 160px;
    margin: 32px 0 0 105px;
}
.menu {
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    width: 255px;
    float: right;
}
.menu-list {
    position: relative;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    padding: 13px 0 13px 32px;
}
.menu-list:hover:not(.active) {
    border-radius: 100px;
    background-color: rgba(255, 255, 255, 0.25);
    transition: background-color 0.25s;
}
.active {
    color: #222;
    background-color: #fff;
    border-radius: 28px 0 0 28px;
}
.active::before,
.active::after {
    content: '';
    position: absolute;
    display: block;
    width: 28px;
    height: 28px;
    right: 0;
    background-image: url('https://akinening.github.io/bookmark/assets/rounded.svg');
    background-size: cover;
}
.active::before {
    top: -28px;
}
.active::after {
    bottom: -28px;
    transform: scale(1, -1);
}
</style>
