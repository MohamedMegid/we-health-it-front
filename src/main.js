import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
////////////////////////////////
import "@/axios/index";
////////////////////////////////////////////////////////////////////////
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import VueDatePicker from '@mathieustan/vue-datepicker';
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';
////////////////////////////////////////////////////////////////////////
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: localStorage.getItem("locale")
    ? localStorage.getItem("locale")
    : "en",
  // messages: {},
});


////////////////////////////////////////////////////////////////////////
// override template style
import "@/assets/styles/customTemplate.css";
////////////////////////////////////////////////////////////////////////
// global mixin variables which is created in each single component or .vue file
Vue.mixin({
    data(){
        return {
          local: localStorage.getItem("locale")
            ? localStorage.getItem("locale")
            : "en",
        };
    },
  })
Vue.config.productionTip = false;

new Vue({
  router,
  VueDatePicker,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#we-health-it-app");
