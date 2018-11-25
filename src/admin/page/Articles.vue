<template>
  <article-component :articles="articles" @current-change="currentChange"></article-component>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
  import ArticleComponent from '../components/ArticleList.vue'
  export default{
    data () {
      return {
        articles: [{}]
      }
    },
    components: {
      ArticleComponent
    },
    methods: {
      getArticles: function (query) {
        var me = this
        axios.post('/api/article/index', query)
          .then((response) => {
            me.articles = response.data
          },
            (err) => {
              console.log(err)
            }
          )
      },
      currentChange: function (page) {
        this.getArticles({ page: page })
      }
    },
    mounted: function () {
      this.getArticles({ page: 1 })
    }
  }
</script>
<style rel="stylesheet/less" type="text/css" lang="less" scoped>

</style>
