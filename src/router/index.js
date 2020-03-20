import Vue from 'vue'
import Router from 'vue-router'
//解决path路径重复添加问题
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

import Tingba from "../pages/tingba"
import Mine from "../pages/mine"
import Find from "../pages/find"
import Acount from "../pages/acount"

//二级路由
import Recommend from "../pages/tingindex/recommend"
import Publish from "../pages/tingindex/publish"
import Original from "../pages/tingindex/original"

export default new Router({
  routes: [{
    path: '/',
    redirect: "/tingba"
  }, {
    path: '/tingba',
    component: Tingba,
    children: [{
      path: "/",
      redirect: "recommend"
    }, {
      path: "recommend",
      component: Recommend
    }, {
      path: "publish",
      component: Publish
    }, {
      path: "original",
      component: Original
    }]
  }, {
    path: '/mine',
    component: Mine
  }, {
    path: '/find',
    component: Find
  }, {
    path: '/acount',
    component: Acount
  }, ]
})
