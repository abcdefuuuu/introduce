import Vue from 'vue';
import 'tailwindcss/tailwind.css';
import 'fullpage.js/dist/fullpage.css';
import './assets/tailwind.css';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
