import { reactive } from "vue";

export const store = reactive({
  apiUrl:'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  apiUrlType:'https://db.ygoprodeck.com/api/v7/archetypes.php',
  cardsListStart:[],
  cardsListType:[],
  typeToSearch:null,
  loading:true,
  start:true,
})