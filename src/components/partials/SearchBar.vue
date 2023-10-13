<template>
  <div class="search-bar">
    <select class="form-select" aria-label="select">
      <option selected>Select</option>
      <option 
        v-for="(type,index) in store.cardsListType" 
        :key="index"
        :value="type.archetype_name"
      >{{ type.archetype_name }}</option>
    </select>
  </div>
</template>

<script>
import { store } from '../../data/store';

export default {
  name:'SearchBar',
  data(){
    return{
      store,
    }
  },


}
</script>

<style lang="scss" scoped>
  .search-bar{
    padding-bottom: 50px;
  }
</style>