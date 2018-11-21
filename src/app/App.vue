<template>
  <div id="app">
    <menu-component></menu-component>
    <router-view></router-view>
    <footer-component></footer-component>
    <loading-component></loading-component>
  </div>
</template>

<script>
  import MenuComponent from './components/Menu'
  import FooterComponent from './components/Footer'
  import LoadingComponent from './components/Loading'
  import FastClick from 'fastclick'
  export default {
    components: {
      MenuComponent,
      FooterComponent,
      LoadingComponent
    },
    mounted () {
      this.$nextTick(() => {
        FastClick.attach(document.body, {})

        // 接入多说
        // window.duoshuoQuery = { short_name: 'shuiyiio' }
        // ;(function () {
        //   var ds = document.createElement('script')
        //   ds.type = 'text/javascript'
        //   ds.async = true
        //   ds.src = (document.location.protocol === 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js'
        //   ds.charset = 'UTF-8'
        //   document.getElementsByTagName('head')[0].appendChild(ds)
        // })()
      })
    },
    destroyed () {
      console.log('destroyed')
    }
  }
</script>

<style lang="less">
  @import "../../bower_components/HTML5-Reset/assets/css/reset.css";
  @import "../../node_modules/highlight.js/styles/default.css";
  @import "../assets/iconfont.css";
  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    font-weight: normal;
    font-family: 'HanHei SC', 'PingFang SC', 'Helvetica Neue Thin', 'Helvetica', 'STHeitiSC-Light', 'Arial', sans-serif;
  }

  #app {
    position: relative;
    width: 100%;
    min-height: 100%;
  }

   a {
    color: #308ddf;
    text-decoration: none;
  }

</style>
