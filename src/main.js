// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueStash from 'vue-stash';

import store from './store';

Vue.use(VueStash)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: { store },
  components: {
    App
  },
  template: '<App/>'
})
