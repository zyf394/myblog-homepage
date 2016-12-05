<template>
  <div id="ds-thread"  class="ds-thread" 
  :data-thread-key="article.id" 
  :data-title="article.title" 
  :data-url="article.url"></div>
</template>
<style rel="stylesheet/less" type="text/css" lang="less" scoped>
  
</style>
<script>
  export default{
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      nomore: {
        type: Boolean,
        default: false
      },
      article: {
        type: Object,
        default: {
          title: '',
          content: '',
          author: '',
          publishTime: '',
          url: window.location.href
        }
      }
    },
    methods: {
      updateDuoshuoComments () {
        var container = document.getElementById('duoshuo-comment')
        var el = document.getElementById('ds-thread') // 该div不需要设置class="ds-thread"
        window.DUOSHUO && window.DUOSHUO.EmbedThread(el)
        window.jQuery && window.jQuery(container).append(el)
      }
    },
    updated () {
      this.$nextTick(() => {
        this.updateDuoshuoComments()
      })
    }
  }
</script>
