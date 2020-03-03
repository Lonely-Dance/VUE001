<template>
  <div>
    <!-- 顶部滑动条区 -->
    <!-- 去掉mui-fullscreen -->

    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']"
            v-for="item in cates"
            :key="item.id"
            @tap="getPhotoListByCateId(item.id)"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>
    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
        <img v-lazy="item.img_url" />
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
    
<script>
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      cates: [],
      list: []
    };
  },
  created() {
    this.getAllCategory();
    // 默认进入页面，就主动请求 所有图片列表的数据
    this.getPhotoListByCateId(0);
  },
  mounted() {
    // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
    // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
    // 2. 初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimgcategory")
        .then(result => {
          if (result.body.status === 0) {
            //拼接出一个列表
            result.body.message.unshift({
              title: "全部",
              id: 0
            });
            this.cates = result.body.message;
          }
        });
    },
    getPhotoListByCateId(cateId) {
      // 根据 分类Id，获取图片列表
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimages/" + cateId)
        .then(result => {
          if (result.body.status === 0) {
            this.list = result.body.message;
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
//底部图标不能滑动
* {
  touch-action: pan-y;
}
.photo-list {
  margin: 0;//使得li居中
  padding: 10px;
  padding-bottom: 0;
  li {
    list-style: none;
    position: relative;
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
  }
  .info {
    position: absolute;
    bottom: 0;
    background-color: rgba($color: #000, $alpha: 0.4);
    max-height: 200px;
    text-align: left;
    color: #fff;
    .info-title {
      font-size: 14px;
    }
    .info-body {
      font-size: 13px;
    }
  }
  img {
    width: 100%;
    // 去掉图片的下边线
    vertical-align: middle;
  }
  //实现懒加载图标的样式设置
  img[lazy="loading"] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
}
</style>