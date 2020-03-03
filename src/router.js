import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

//导入组件
import Home from '../src/components/HomeContainer.vue'
import Member from '../src/components/MemberContainer.vue'
import Shopcar from '../src/components/ShopCarContainer.vue'
import Search from '../src/components/SearchContainer.vue'
import  Newslist from '../src/components/news/Infolist.vue'
import Infodetail from '../src/components/news/Infodetail.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/member',component:Member},
    {path:'/shopcar',component:Shopcar},
    {path:'/search',component:Search},
    {path:'/home/newslist',component:Newslist},
    {path:'/home/newsinfo/:id',component:Infodetail},//注意加上：id
    
  ],
  // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router