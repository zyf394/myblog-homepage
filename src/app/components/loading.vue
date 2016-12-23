<template>
  <div id="blog-loading" v-show="loading"></div>
</template>
<script>
import Spinner from 'spin.js'
import { mapState } from 'vuex'

export default {
  computed: mapState({
    loading: state => state.loading
  }),
  mounted () {
    let target = document.getElementById('blog-loading')
    new Spinner({
      color: '#fff',
      lines: 12,
      length: 0,
      width: 10,
      radius: 30
    }).spin(target)
  }
}
</script>
<style lang="less">
  #blog-loading{
    position: fixed;
    top: 0;
    background: rgba(0,0,0,0.2);
    height: 100%;
    width: 100%;
    .spinner{
      position: relative;
      &::after {
        content: 'loading...';
        position: absolute;
        display: block;
        color: #fff;
        font-family: 'HanHei SC', 'PingFang SC', 'Helvetica Neue Thin', 'Helvetica', 'STHeitiSC-Light', 'Arial', sans-serif;
        font-weight: 100;
        transform: translate(-45%,250%)
      }
    }
  }
</style>
