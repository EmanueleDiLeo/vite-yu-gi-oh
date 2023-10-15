<template>

  <Header />
  <Loader v-if="store.loading" />
  <div v-else class="bg-container" >
    <SearchBar @startSearch="getApi"/>
    <Main />
  </div>

</template>

<script>
import axios from 'axios';
import {store} from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import SearchBar from './components/partials/SearchBar.vue';
import Loader from './components/partials/Loader.vue'

  export default {
    name:'App',
    components:{
      Header,
      Main,
      SearchBar,
      Loader,
    },

    data(){
      return{
        store
      }
    },

    methods:{
      getApiStart(){
        store.loading=true;
        axios.get(store.apiUrlStart)
        .then( res => {
          store.cardsListStart = res.data.data;
          console.log(store.cardsListStart);
          store.loading=false;
        })
        .catch(err => {
          console.log(err);
          store.loading=false;
        })
      },

      getApi(){
        store.loading=true;
        axios.get(store.apiUrl,{
          params:{
            archetype: store.typeToSearch
          }
        })
        .then( response => {
          store.cardsListStart = response.data.data;
          console.log(store.typeToSearch);
          console.log(store.cardsListStart);
          store.loading=false;
        })
        .catch(err => {
          console.log(err);
          store.loading=false;
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