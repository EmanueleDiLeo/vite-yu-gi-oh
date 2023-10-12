<template>
  <div class="my-col">
    <div class="my-card">
      <img :src="card.card_images[0].image_url" :alt="card.name">
      <h4>{{ card.name }}</h4>
      <span>{{ card.archetype }}</span>
      <span>{{ card.attribute }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'Card',
  props:{
    card:Object,
    img:String,
  },
}
</script>

<style lang="scss" scoped>

.my-col{
  width: calc(100% / 5);
  margin-bottom: 20px;
  .my-card{
    text-align: center;
    width: 100%;
    background-color: #d48f38;
    height: 100%;
    padding-bottom:10px;

    img{
      max-width: 100%;
    }

    h4{
      padding: 10px 5px;
      color: white;
    }
  }
}
</style>