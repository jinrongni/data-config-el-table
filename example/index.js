import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue/dist/vue.js';
import App from './App.vue';

import ElementUI from 'element-ui';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(App)
});
