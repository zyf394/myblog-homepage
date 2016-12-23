<template>
  <div class="blog-content">
    <article class="content-box" v-for="(item, index) in articles">
      <h1 class="list-title">
        <router-link :to="'article/' + item.id">{{item.title || ''}}</router-link>
      </h1>
      <div class="wrap">
        <p class="article-summary" v-html="markedContent(index)"></p>
        <router-link :to="'article/' + item.id" v-if="item.id" class="article-arrow">&gt;&gt;</router-link>
        <p v-if="item.id" class="article-info">
          <i class="iconfont icon-01"></i>
          {{item.author}}
          <time><i class="iconfont icon-06"></i>{{item.publishTime | formatTime}}</time>
        </p>
      </div>
    </article>
    <load-more-component
      :loading="loading"
      :nomore="nomore"
      @show-more="getArticles"></load-more-component>
  </div>
</template>
<script type="text/ecmascript-6">
  import showdown from 'showdown'
  import LoadMoreComponent from '../components/LoadMore'
  import { mapState, mapActions, mapMutations } from 'vuex'

  export default {
    components: {
      LoadMoreComponent
    },
    data () {
      return {
        page: 1
      }
    },
    computed: mapState({
      articles: state => state.HOME.articleList,
      loading: state => state.HOME.loading,
      nomore: state => state.HOME.nomore
    }),
    methods: {
      ...mapMutations({
        LOADING_COMPONENT_SHOW: 'LOADING_COMPONENT_SHOW',
        LOADING_COMPONENT_HIDE: 'LOADING_COMPONENT_HIDE',
        SHOW_BTN_LOADING: 'SHOW_BTN_LOADING',
        SHWO_BTN_DISABLE: 'SHWO_BTN_DISABLE'
      }),
      ...mapActions({
        CHANGE_ARTICLELIST: 'CHANGE_ARTICLELIST'
      }),
      getArticles () {
        var postData = {
          page: this.page,
          pageSize: 5,
          status: 2
        }

        if (!this.nomore) {
          this.SHOW_BTN_LOADING()
          this.CHANGE_ARTICLELIST(postData)
            .then(resData => {
              this.LOADING_COMPONENT_HIDE()
              this.SHOW_BTN_LOADING()
              resData.length < 5 && this.SHWO_BTN_DISABLE()
              this.page++
            })
            .catch(err => {
              console.log(err)
            })
        }
      },
      markedContent: function (index) {
        var me = this
        var converter = new showdown.Converter({tables: true})
        var markedContent = me.articles[index].content || ''
        return me.delHtmlTag(converter.makeHtml(markedContent))
      },
      delHtmlTag: function (str) { // 去掉所有的html标记
        return str.replace(/<[^>]+>/g, '')
      }
    },
    mounted: function () {
      this.LOADING_COMPONENT_SHOW()
      this.$nextTick(() => {
        this.getArticles()
      })
    }
  }
</script>
<style rel="stylesheet/less" type="text/css" lang="less" scoped>
  .blog-content {
    display: flex;
    flex-flow: column;
    width: 80%;
    max-width: 720px;
    margin: 0 auto;
    color: #2c3e50;
    text-align: left;

    .content-box {
      padding: 3rem 0;
      border-bottom: 1px solid #e5e5e5;
      .list-title {
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
        font-weight: normal;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        a {
          color: #333;
          font-weight: normal;
        }
      }
      .wrap {
        line-height: 1.5;
        color: #666;

        .article-summary {
          font-size: 0.9rem;
          font-weight: 100;
          max-height: 2.7rem;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .article-info {
          margin-top: 0.5rem;
          font-size: 0.5rem;
          color: #b5b5b5;
          font-weight: 100;

          i, time {
            font-size: 0.5rem;
            color: #b5b5b5;
            margin-right: 0.2rem;
          }
          i::before {
            color: #308ddf;
          }
        }

        .article-arrow {
          font-weight: 100;
          font-family: "Helvetica Neue", Helvetica, 'Source Sans Pro', Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
      }
    }

  }
</style>
