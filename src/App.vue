<template>
  <div class="app-container"> 

    
    <mt-header fixed title="固定在顶部"></mt-header>
    <transition>
		<router-view></router-view>
	</transition>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"> </span> 
				<span class="mui-tab-label">会员</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/shopcar">
        <!-- 复制过来的没有mui-icon 需要手动加上，否则没有样式 -->
				<span class=" mui-icon  mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span> 
			 
      	<span class="mui-tab-label">购物车</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link >
		</nav>
  </div>
</template>

<script>
 
   
</script>
 <style lang="scss" scoped>
  .app-container{
    padding-top: 40px;
	//解决切换时顶部底部也跟着动的问题，因为有滚动条
	overflow-x: hidden
  }
  .v-enter{
	  opacity: 0;
	  transform: translateX(100%)

  }
    .v-leave-to{
	  opacity: 0;
	  transform: translateX(-100%);
	  position: absolute;//解决切换时的漂浮问题

  }
  .v-enter-active,
  .v-leave-active{
	  opacity: 0;
	  transition: all 0.3s ease;
  }

 
 </style>
