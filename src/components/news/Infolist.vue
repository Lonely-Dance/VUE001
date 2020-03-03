<template>
<div>
   <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<!-- 这里连接里有变量，使用bind(即：to) -->
					<!-- <router-link :to="'/home/newsinfo/'+item.id"> -->
					<router-link :to="'/home/newsinfo/' + item.id">
						<!-- 这里的属性要使用：src绑定URL 因为是变量 -->
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
		
							<p class='mui-ellipsis'><span>发表时间：{{item.add_time | dateFormat("YYYY-MM-DD HH:mm:ss")}}</span>
							<span>点击：{{item.click}}</span></p>
							
						</div>
					</router-link>
				</li>
				 
			</ul>
</div>


</template>
<script  >
 import {Toast  } from "mint-ui";
 export default {
	 data(){
		 return {
			 newslist:[]
		 }
	 },
	 created(){
		 this.getnewslis()
	 },
	 methods:{
		 getnewslis(){
			 this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(result=>{
				 if(result.body.status==0){
					 
					 this.newslist=result.body.message;
					 Toast('success');
					
				 }else{
					 Toast('获取列表失败')
				 }
			 })
		 }
	 }
 }
</script>
<style lang="scss" scoped>
.mui-table-view{
	h1{
		font-size: 14px;
	}
	.mui-ellipsis{
		font-size: 12px;
		color:#226aff;
		// 使得两个span分布在两边
		display: flex;
		justify-content: space-between
	}
}
</style>