<template>

  <Header />
  <Main />

</template>

<script>
import axios from 'axios';
import {store} from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

  export default {
    name:'App',
    components:{
      Header,
      Main,
    },

    data(){
      return{
        store
      }
    },

    methods:{
      getApiStart(){
        axios.get(store.apiUrlStart)
        .then( res => {
          store.cardsListStart = res.data.data;
          console.log(store.cardsListStart);
        })
        .catch(err => {
          console.log(err);
        })
      },

      getApi(){
        axios.get(store.apiUrl)
        .then( response => {
          store.cardsList = response.data.data;
          // console.log(store.cardsList);
        })
        .catch(err => {
          console.log(err);
        })
      },
    },

    computed:{

    },

    mounted(){
      this.getApiStart();
    }
  }
</script>

<style lang="scss">
  @use './scss/main.scss';

</style>