<template>

  <Header />
  <div class="bg-container" >
    <SearchBar />
    <Main />
  </div>

</template>

<script>
import axios from 'axios';
import {store} from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import SearchBar from './components/partials/SearchBar.vue';

  export default {
    name:'App',
    components:{
      Header,
      Main,
      SearchBar,
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

      getApiType(){
        axios.get(store.apiUrlType)
        .then( response => {
          store.cardsListType = response.data;
          console.log(store.cardsListType);
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
      this.getApiType();
    }
  }
</script>

<style lang="scss">
  @use './scss/main.scss' as *;


  .bg-container{
    min-height: 600px;
    background-color: $bg-main;
    padding: 50px;
    width: 100%;
  }

</style>