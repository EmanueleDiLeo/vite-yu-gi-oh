<template>
  <div class="col">
    <div class="card">
      <img src="https://images.ygoprodeck.com/images/cards_small/34541863.jpg" :alt="card.name">
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

.col{
  width: calc(100% / 5);
  margin-bottom: 20px;
  .card{
    text-align: center;
    width: 168px;
    background-color: #d48f38;
    height: 100%;
    padding-bottom:10px;

    h4{
      padding: 10px 5px;
      color: white;
    }
  }
}
</style>