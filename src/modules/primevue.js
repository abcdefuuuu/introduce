import Vue from 'vue';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import InputText from 'primevue/inputtext';
import PrimeButton from 'primevue/button';
import PrimeDialog from 'primevue/dialog';
import Card from 'primevue/card';

Vue.use(PrimeVue);

Vue.component('InputText', InputText);
Vue.component('PrimeButton', PrimeButton);
Vue.component('PrimeDialog', PrimeDialog);
Vue.component('Card', Card);
