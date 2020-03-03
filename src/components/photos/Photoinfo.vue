<template>
    <div class="newsinfo-container">
     
            <h2 class="title">{{photoinfo.title}}</h2>
            <p class="subtitle"> <span>时间：{{photoinfo.add_time | dateFormat('YYYY-MM-DD HH:mm:ss')}}</span> 
            <span>点击：{{photoinfo.click}} 次</span></p>
            <hr>
            <!-- 缩略图区域 -->
             <div class="thumbs" >
                 <img class="preview-img" :src="item.src" alt="" v-for="(item,index) in list" :key="item.src" @click="$perview.open(index,list)">

             </div>
               <!-- 图片内容区域 -->
            <div class="content" v-html="photoinfo.content"></div>
             <!-- 评论区域 -->
             <comment-com :id="this.id"></comment-com>
    </div>
</template>
<script>
  import {Toast} from "mint-ui";
  import Comment from "../subcomponents/comments.vue"
export default {
    data(){
        return {
            id:this.$route.params.id,//将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
            photoinfo:{},//新闻对象
            list:[]
        }
    },
    created(){
      this.getContent();
      this.getThumbs() 
    },
    methods:{
        getContent(){
            this.$http.get('http://www.liulongbin.top:3005/api/getimageInfo/'+this.id).then(result=>{
                if(result.body.status==0){
                    this.photoinfo=result.body.message[0];
                    Toast('successful')
                    
                }else{
                    Toast('未获取内容')
                }
            })
        },
            getThumbs() {
      // 获取缩略图
      this.$http.get("http://www.liulongbin.top:3005/api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          // 循环每个图片数据，补全图片的宽和高
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
          });
          // 把完整的数据保存到 list 中
          this.list = result.body.message;
        }
      });
    }
        },
        components:{
          'comment-com':Comment
        }
  
}
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
.thumbs{
    img{
        height: 100px;
        margin: 10px;
        box-shadow: 0 0 8px #999
    }
}

</style>