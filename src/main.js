 import Vue from "vue"
 import App from "./App.vue"
 //取消按需导入模块
//  import { Header ,Swipe, SwipeItem,Button} from 'mint-ui';
//  Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.component(Header.name, Header);

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
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
// Vue.http.options.root="http://www.liulongbin.top:3005" 
// 这么设置不能得到信息?
 
// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import moment from "moment"
Vue.filter("dateFormat",function(datastr,pattern){
  return moment(datastr).format(pattern);
})

 var vm=new Vue({
     el:"#app",
     render:c=>c(App),
     router
 })