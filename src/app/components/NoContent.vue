<template>
  <main>
    <div><i class="iconfont icon-51"></i></div>
    <h1>404</h1>
    <p>找不到页面，{{second}}秒后返回首页……</p>
  </main>
</template>
<style scoped>
  main{
    min-height: 10rem;
    width: 90%;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  main > h1 {
    color: #308ddf;
    text-align: center;
    font-size: 24px;
  }
  main > p {
    color: #ccc;
    font-size: 12px;
    font-family: 'HanHei SC', 'PingFang SC', 'Helvetica Neue Thin', 'Helvetica', 'STHeitiSC-Light', 'Arial', sans-serif;
  }
  main > div > i{
    display: inline-block;
    margin: 1rem;
    width: 5rem;
    height: 5rem;
    color: #308ddf;
  }
  main > div > i::before{
    font-size: 5rem;
  }
</style>
<script>
  export default{
    data () {
      return {
        second: 5
      }
    },
    mounted () {
      let timer = window.setInterval(() => {
        if (this.second === 0) {
          let location = window.location
          location.href = location.origin
          clearInterval(timer)
        } else {
          this.second--
        }
      }, 1000)
    }
  }
</script>
