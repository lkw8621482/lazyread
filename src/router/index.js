import Vue from 'vue'
import Router from 'vue-router'
//解决path路径重复添加问题
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)



//二级路由
import Recommend from "../pages/tingindex/recommend"
import Publish from "../pages/tingindex/publish"
import Original from "../pages/tingindex/original"
import Gengxin from "../pages/minindex/gengxin.vue"
import Xiangting from "../pages/minindex/xiangting.vue"
import Tingyou from "../pages/minindex/tingyou.vue"

//传值
import Vipdetail from "../pages/vipdetail"
import Reader from "../pages/reader"

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
    component: Mine,
    children: [{
      path: "/",
      redirect: "gengxin"
    }, {
      path: "gengxin",
      component: Gengxin
    }, {
      path: "xiangting",
      component: Xiangting
    }, {
      path: "tingyou",
      component: Tingyou
    }]
  }, {
    path: '/find',
    component: Find
  }, {
    path: '/acount',
    component: Acount
  }, {
    path: '/vipdetail/',
    component: Vipdetail
  }, {
    path: '/reader/',
    component: Reader
  }, ]
})
