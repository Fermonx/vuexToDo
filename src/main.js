// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import { store } from './store/store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/stylesheets/style.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

//COMPONENTES

import list from './components/list'
import items from './components/items'
import add from './components/add'


Vue.component('lista',list);
Vue.component('item',items);
Vue.component('agregar',add);






/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
});
