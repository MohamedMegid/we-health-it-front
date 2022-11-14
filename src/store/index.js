import Vue from "vue";
import Vuex from "vuex";
import signUp from "./modules/authentication/signUp";

Vue.use(Vuex);
Vue.config.devtools = true
export default new Vuex.Store({
  // state: {
  //   products: ["1", 2, 3, 4],
  // },
  // getters: { // get the currant state
  //   productSale: (state) => {
  //     const saleProducts = state.products.map((p) => {
  //       return p + "dbah";
  //     });

  //     return saleProducts;
  //   },
  // },
  // mutations: {
  //   mutationProduct:state =>{

  //     console.log("mutation")
  //   }


  // }, // to edit in the state
  // actions: { // use to perform un asynchronous tasks

  //   reduce:context=>{

  //     setTimeout(()=>{
  //       context.commit("mutationProduct")
  //       console.log("actions")
  //     },2000) //
  //   }
  // },
  modules: {signUp},
});
