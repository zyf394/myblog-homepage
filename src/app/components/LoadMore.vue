<template>
  <button :class="{'loading': loading, 'no-more' : nomore}"
          @click="clickHandler">
    <span>{{nomore ? '没有更多文章了' : (loading ? '加载中...' : '点击加载更多')}}</span>
  </button>
</template>
<style rel="stylesheet/less" type="text/css" lang="less" scoped>
  button{
    margin-top:1rem;
    height: 2.5rem;
    border-radius: 4px;
    border: 0;
    background: #308ddf;
    &.no-more{
      background: #b5b5b5;
      &:hover,&:active {
        background: #b5b5b5;
      }
    }
    &:focus{
      outline: none;
    }
    &:hover,&:active {
      background: #2E86D4;
    }

    span{
      font-family: 'HanHei SC', 'PingFang SC', 'Helvetica Neue Thin', 'Helvetica', 'STHeitiSC-Light', 'Arial', sans-serif;
      font-weight: 200;
      color: #fff;

    }
  }
</style>
<script>
  const EVENT_SHOW_MORE = 'show-more'

  export default{
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      nomore: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      clickHandler () {
        this.$emit(EVENT_SHOW_MORE)
      }
    }
  }
</script>
