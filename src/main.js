 import Vue from "vue"
 import App from "./App.vue"
 import { Header ,Swipe, SwipeItem} from 'mint-ui';
 import 'mint-ui/lib/style.css'
 //mint-ui 按需导入得导入样式才能显示
 import "./lib/mui/css/mui.css"

 import './lib/mui/css/icons-extra.css'
 //导入路由模块
 import VueRouter from 'vue-router'
 
Vue.use(VueRouter)
//导入自己的路由模块
 import   router from './router.js'

  // 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
  


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Header.name, Header);

 var vm=new Vue({
     el:"#app",
     render:c=>c(App),
     router
 })