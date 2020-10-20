import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueTheMask from 'vue-the-mask';
import App from './App.vue';
import {createRouter} from "./router/router";
import VueCharts from 'vue-chartjs'

Vue.use(ElementUI);
Vue.use(VueTheMask);
Vue.use(VueCharts);

Vue.config.productionTip = false
const router = createRouter();
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
