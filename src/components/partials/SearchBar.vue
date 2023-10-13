<template>
  <div class="search-bar">
    <select v-model="store.typeToSearch" @change="$emit('startSearch')" class="form-select" type="text" aria-label="Default select example" placeholder="Search Character">
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