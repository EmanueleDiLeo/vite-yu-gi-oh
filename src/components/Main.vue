<template>
  <main>
    <!-- <h2 v-if="store.cardsListStart.length < 20">Loading...</h2> -->
    <div>
      <div class="container">
        <Results />
        <div class="row">
        <Card
          v-for="(card) in store.cardsListStart"
          :key="card.id"
          :card="card"
          :img = "card.card_images[0].image_url"
          />
        </div>
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
    Results,
  },

  data(){
    return{
      store
    }
  },

}
</script>

<style lang="scss" scoped>
@use '../scss/partials/variables' as *;
main{
  
  h2{
      font-size: 5rem;
    }
  .container{
    background-color: aliceblue;
    padding: 50px 50px 30px 50px;
    min-height: 300px;
  }
}
</style>