 import Vue from "vue"
 import App from "./App.vue"
 import { Header } from 'mint-ui';
 import 'mint-ui/lib/style.css'
 //mint-ui 按需导入得导入样式才能显示
 import "./lib/mui/css/mui.css"

 Vue.component(Header.name, Header);

 var vm=new Vue({
     el:"#app",
     render:c=>c(App)
 })