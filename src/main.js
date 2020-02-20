import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyPlugin from './plugins/my-plugin'

Vue.use(MyPlugin)

Vue.config.productionTip = false
Vue.config.performance = true

Vue.config.errorHandler = function (err, vm, info) {
  console.log(err)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
