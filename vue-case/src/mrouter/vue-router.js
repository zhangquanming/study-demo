import Link from './router-link'
import View from './router-view'

let Vue

class VueRouter {
  constructor (options) {
    this.$options = options

    // 利用Vue提供的defineReactive做响应化，当current变化的时候，依赖的组件会重新render
    Vue.util.defineReactive(this, 'current', '/')

    // 监控url变化
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))

    // 创建一个路由映射表
    this.routeMap = {}
    options.routes.forEach(route => {
      this.routeMap[route.path] = route
    })
  }

  onHashChange () {
    this.current = window.location.hash.slice(1)
  }
}

VueRouter.install = function (_Vue) {
  Vue = _Vue

  Vue.mixin({
    beforeCreate () {
      // 确保根实例的时候才执行
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })
  Vue.component('router-link', Link)
  Vue.component('router-view', View)
}

export default VueRouter
