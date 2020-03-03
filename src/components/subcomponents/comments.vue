<template>
    <div class="cmt-container">
        <h1> 发表评论 {{this.id}}</h1>
        <hr>
        <textarea placeholder="请输入想说的话~" v-model="msg" maxlength="120"></textarea>
      
        <mt-button size="large" class="btn" @click="postComments">发表评论</mt-button>
        <!-- 评论内容 -->
        
        <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat("YYYY-MM-DD HH:mm:ss")}}
        </div>
        <div class="cmt-body">
          {{ item.content === 'undefined' ? '此用户没有发表任何评论此用户很懒，嘛都没说': item.content }}
        </div>
      </div>

    </div>
        <hr>
        <mt-button  type="danger" size="large"   plain @click="getMore">加载更多</mt-button>

    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
    data(){
        return {
            comments:[],
            pageIndex:1,
            msg:""//评论内容
        }
    },
    //记得调用
    created(){
        this.getComments();
    },
    methods:{
        getComments(){
            this.$http.get("http://www.liulongbin.top:3005/api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
            
          if (result.body.status === 0) {
            // this.comments = result.body.message;
            // 每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据，拼接上新数据
            this.comments = this.comments.concat(result.body.message);
          } else {
            Toast("获取评论失败！");
          }
        });
        },
        getMore(){
            this.pageIndex++;
            this.getComments();
        },
         // 发表评论
      // 参数1： 请求的URL地址
      // 参数2： 提交给服务器的数据对象 { content: this.msg }
      // 参数3： 定义提交时候，表单中数据的格式  { emulateJSON:true }
      postComments(){
           // 校验是否为空内容
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空！");
      }
    //注意加上id，表示这篇文章的评论
          this.$http.post('http://www.liulongbin.top:3005/api/postcomment/'+this.$route.params.id,{
              content:this.msg.trim()
          },{emulateJSON:true}).then((result)=>{
              if(result.body.status===0){
                  var cmt={
                      user_name:"匿名对象",
                      add_time:Date.now(),
                      content:this.msg.trim()
                  };
                  this.comments.unshift(cmt);
                  this.msg="";
              }
          })

      }
    },
    props:['id']
    
}
</script>
<style lang="scss" scoped>
.cmt-container{
    padding-bottom: 50px
}
h1{
    font-size: 18px;
    margin: 5px 0;
}
.btn{
    background-color: #007aff;
    color:#fff;
    margin: 5px 0;
}
 

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
   
</style>