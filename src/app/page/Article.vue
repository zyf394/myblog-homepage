<template>
  <main class="article-container">
    <p v-show="!hasArticle">未找到该文章</p>
    <div class="wrap" v-show="hasArticle" >
      <header>
        <h1 class="article-title">{{article.title}}</h1>
        <p class="article-info" v-if="article.title">
          <i class="iconfont icon-01"></i><router-link :to="'/about/'">{{article.author}}</router-link>
          <time class="iconfont icon-06"></time>{{article.publishTime | formatTime}}
        </p>
      </header>
      <article class="markdown-body" v-html="markedContent()"></article>
      <div id="duoshuo-comment">
        <comment-component :article="article"></comment-component>
      </div>
    </div>
  </main>
</template>
<script type="text/ecmascript-6">
  import showdown from 'showdown'
  import hljs from 'highlight.js'
  import CommentComponent from '../components/Comment'
  import { mapState, mapMutations, mapActions } from 'vuex'

  export default{
    data () {
      return {
        hasArticle: true
      }
    },
    computed: mapState({
      article: state => state.ARTICLE.article
    }),
    components: {
      CommentComponent
    },
    watch: {
      'article.content' (val, oldVal) {
        this.highlightCodes()
      },
      '$route' (to, from) {
        let id = to.params.id
        if (id) {
          this.getOneArticle(id)
        } else {
          this.resetTitle()
          this.resetDescript()
        }
      }
    },
    methods: {
      ...mapMutations({
        LOADING_COMPONENT_SHOW: 'LOADING_COMPONENT_SHOW',
        LOADING_COMPONENT_HIDE: 'LOADING_COMPONENT_HIDE'
      }),
      ...mapActions({
        CHANGE_ONE_ARTICLE: 'CHANGE_ONE_ARTICLE'
      }),
      getOneArticle (id) {
        var me = this
        this.LOADING_COMPONENT_SHOW()
        this.CHANGE_ONE_ARTICLE(id)
          .then((response) => {
            this.LOADING_COMPONENT_HIDE()
            var resData = response
            if (resData.length) {
              // me.article = response.data[0]
              me.changeTitle(me.article)
              me.changeDescript(me.article)
            } else {
              me.hasArticle = false
            }
          })
          .catch(err => {
            console.log(err)
          })
      },
      highlightCodes () {
        var codeEles = document.querySelectorAll('pre code')
        for (var i = 0; i < codeEles.length; i++) {
          hljs.highlightBlock(codeEles[i])
        }
      },
      markedContent () {
        var me = this
        var converter = new showdown.Converter({tables: true})
        var markedContent = me.article.content || ''
        return converter.makeHtml(markedContent)
      },
      changeTitle (data) {
        document.title = data.title
      },
      resetTitle () {
        document.title = 'Shuiyi’s Blog 水乙的博客'
      },
      changeDescript (data) {
        let desc = document.querySelector('meta[name="description"]')
        desc.content = data.content.substring(0, 50)
      },
      resetDescript () {
        let desc = document.querySelector('meta[name="description"]')
        desc.content = '水乙的博客'
      }
    },
    updated () {
      this.highlightCodes()
    },
    mounted: function () {
      this.$nextTick(() => {
        let id = this.$route.params.id
        console.log(id)
        id && this.getOneArticle(id)
      })
    }
  }
</script>
<style rel="stylesheet/less" type="text/css" lang="less" scoped>
  @import "../../../node_modules/github-markdown-css/github-markdown.css";

  .article-container{
    padding: 1rem;
    width: 90%;
    max-width: 710px;
    margin: 2rem auto;

    .wrap{

      header{
        margin-bottom: 2rem;

        .article-title{
          font-size: 1.2rem;
          line-height: 1.5;
          font-weight: normal;
          margin-bottom: 0.5rem;
          word-wrap: break-word;
          word-break: break-all;
        }
        .article-info{
          font-size: 14px;
          color: #b5b5b5;
          font-weight: 100;

          i{
            color: #308ddf;
            margin:0 0.5rem;
          }
          time{
            color: #308ddf;
            margin:0 0.5rem;
          }
        }
      }

      article{
        padding: 0.5rem 0.2rem;
        font-family: 'HanHei SC', 'PingFang SC', 'Helvetica Neue Thin', 'Helvetica', 'STHeitiSC-Light', 'Arial', sans-serif;
        font-weight: 200;
        color: #666;

      }

    }
  }
</style>
