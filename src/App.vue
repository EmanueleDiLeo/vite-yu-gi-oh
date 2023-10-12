<template>

  <Header />
  <Main />

</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios';
import {store} from './data/store';

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
          store.cardsList = res.data.results;
        })
        .catch(err => {
          console.log(err);
        })
      },

      getApi(){
        axios.get(store.apiUrl)
        .then( res => {
          store.cardsList = res.data.results;
        })
        .catch(err => {
          console.log(err);
        })
      },
    },

    mounted(){
      this.getApiStart();
      this.getApi();
    }
  }
</script>

<style lang="scss">
  @use './scss/main.scss';

</style>