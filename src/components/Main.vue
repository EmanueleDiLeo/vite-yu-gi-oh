<template>
  <main>
    <div class="my-container">

      <Results />
      <div class="row">
        <h2 v-if="store.cardsListStart.length < 20">Loading...</h2>
        <Card v-else
          v-for="(card,index) in store.cardsListStart"
          :key="index"
          :card="card"
          :img="card.card_images.image_url_small"
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
  .my-container{
    margin: 0 auto;
    width: 90%;
    background-color: aliceblue;
    padding: 50px 0 50px 50px;
    min-height: 300px;
    .row{
      display: flex;
      flex-wrap: wrap;

      h2{
        font-size: 5rem;
      }
    }
  }
}
</style>