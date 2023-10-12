<template>
  <header>
    <img src="/public/Yugioh_anime_logo.webp" alt="logo">
    <h1>Yu-Gi-Oh Api</h1>
  </header>
</template>

<script>
export default {
name:'Header',
}
</script>

<style lang="scss" scoped>
  header{
    padding: 5px 50px;
    display: flex;
    align-items: center;

    img {
      width: 150px;
      margin-right: 20px;
    }
    h1{
      font-size: 2rem;
    }
  }
</style>