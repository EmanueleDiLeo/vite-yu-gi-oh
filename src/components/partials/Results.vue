<template>
  <div class="bg-res">
    <span>{{ numberCard }}</span>
  </div>
</template>

<script>

import { store } from '../../data/store';

export default {
  name:'Results',

  computed:{
    numberCard(){
      if(store.search){
        if(store.cardsList.length > 0){
          return 'Found ' + store.cardsList.length + ' cards';
        }
        return 'Nessun Risultato';
      }
      else{
        return 'Found ' + store.cardsListStart.length + ' cards'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .bg-res{
    background-color: #212529;
    width: calc(100% - 60px);
    min-height: 50px;
    display: flex;
    align-items: center;

    span{
      padding-left: 20px;
      color: white;
    }
  }
</style>