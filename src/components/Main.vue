<template>
  <main>
    <div class="my-container">
      <h2 v-if="store.cardsListStart.length < 20">Loading...</h2>
      <div class="row" v-else>
        <Results />
        <Card
          v-for="(card) in store.cardsListStart"
          :key="card.id"
          :card="card"
          :img = "card.card_images[0].image_url"
          />
      </div>

    </div>
  </main>
</template>

<script>

import {store} from '../data/store';

import Card from './partials/Card.vue';
import Results from './partials/Results.vue';

export default {
  name:'Main',

  components:{
    Card,
    Results
  },

  data(){
    return{
      store
    }
  },

  mounted(){
    setTimeout( () => {
      console.log(store.cardsListStart);
    },2000)
    
  }

}
</script>

<style lang="scss" scoped>
@use '../scss/partials/variables' as *;
main{
  min-height: 600px;
  background-color: $bg-main;
  padding: 50px;
  width: 100%;
  .my-container{
    margin: 0 auto;
    width: 1200px;
    background-color: aliceblue;
    padding: 62px 0 62px 62px;
    min-height: 300px;

    h2{
      font-size: 5rem;
    }
    .row{
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>