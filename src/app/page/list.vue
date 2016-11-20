<template>
<div class="blog-list">
  <ul class="blog-list-wrap" v-for="(list, year) in articlesList">
    <h3><i class="iconfont icon-06"></i><span>{{year}}</span></h3>
    <li v-for="item in list">
      <time>{{item.publishTime.substring(0,10)}}</time> 
      <router-link :to="'/article/' + item.id">{{item.title}}</router-link>
    </li>
  </ul>
</div>
</template>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        articlesList: []
      }
    },
    methods: {
      getArticles () {
        var me = this
        var postData = {
          status: 2
        }
        this.$http.post('/api/article/list', postData).then((response) => {
          me.articlesList = response.data
        }, (err) => {
          console.log(err)
        }
        )
      }
    },
    mounted () {
      this.getArticles()
    }
  }
</script>
<style rel="stylesheet/less" type="text/css" lang="less" scoped>
  .blog-list{
    width: 80%;
    max-width: 720px;
    margin: 0 auto;
  }
  .blog-list-wrap {
    font-family: 'HanHei SC', 'PingFang SC', 'Helvetica Neue Thin', 'Helvetica', 'STHeitiSC-Light', 'Arial', sans-serif;
    font-weight: 200;
    h3 {
      padding-top: 1rem;
      color: #ccc;
      font-size: 18px;
      font-weight: 200;
      i,span{
        vertical-align: middle;
      }
      i{
        padding-right: 0.2rem;
        color: #308ddf
      }
      &::after{
        content: '';
        display: block;
        margin: 0.5rem 0;
        height: 1px;
        background-color: rgba(204, 204, 204, 0.3);
        transform: scaleY(0.5);
        -webkit-transform: scaleY(0.5);
      }
    }
    li{
      padding: 0.5rem 0;
      font-size: 14px;

      &::after{
        content: '';
        display: block;
        margin-top: 0.5rem;
        height: 1px;
        background-color: rgba(204, 204, 204, 0.3);
        transform: scaleY(0.5);
        -webkit-transform: scaleY(0.5);
      }
      time {
        color: #ccc;
      }
    }
  }
</style>
