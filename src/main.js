import Vue from 'vue';
import 'tailwindcss/tailwind.css';
import './modules/primevue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
