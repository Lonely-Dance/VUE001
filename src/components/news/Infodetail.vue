<template>
    <div class="newsinfo-container">
     
            <h2 class="title">{{passage.title}}</h2>
            <p class="subtitle"> <span>时间：{{passage.add_time | dateFormat}}</span> 
            <span>点击：{{passage.click}} 次</span></p>
            <hr>
<!-- 内容区域 -->
             <div class="content" v-html='passage.content'>

             </div>
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
            passage:{}//新闻对象
        }
    },
    created(){
      this.getContent()
    },
    methods:{
        getContent(){
            this.$http.get('http://www.liulongbin.top:3005/api/getnew/'+this.id).then(result=>{
                if(result.body.status==0){
                    this.passage=result.body.message[0];
                    Toast('successful')
                    
                }else{
                    Toast('未获取内容')
                }
            })
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

</style>