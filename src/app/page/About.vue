<template>
  <div class="about-me">
    <figure class="me-pic"></figure>
    <h3 class="me-info"><span>Shuiyi's Contact Info</span></h3>
    <ul class="contact-me">
      <li v-for="(klass, website) in icons" ><i class="iconfont" v-bind:class="klass.icon"></i>
        <a :href="klass.link">{{website}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'

  export default{
    computed: mapState({
      icons: state => state.ABOUT.icons
    }),
    methods: mapMutations({
      LOADING_COMPONENT_SHOW: 'LOADING_COMPONENT_SHOW',
      LOADING_COMPONENT_HIDE: 'LOADING_COMPONENT_HIDE'
    }),
    mounted () {
      this.LOADING_COMPONENT_HIDE()
    }
  }
</script>
<style rel="stylesheet/less" type="text/css" lang="less" scoped>
.about-me{
  margin: 0 auto;
  text-align: center;
  font-family: 'HanHei SC', 'PingFang SC', 'Helvetica Neue Thin', 'Helvetica', 'STHeitiSC-Light', 'Arial', sans-serif;
  font-weight: 100;
}
.me-pic{
  display: inline-block;
  margin-top:2rem; 
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 5px solid #ccc;
  background: url('../../assets/img/me.jpeg')no-repeat;
  background-size: contain;
}
.me-info{
  position: relative;
  font-weight: 200;
  color: #ccc;

  &::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 90%;
    margin: 0 auto;
    height: 1px;
    background-color: rgba(204, 204, 204, 0.3);
    transform: translateX(-50%) scaleY(0.5);
    -webkit-transform: translateX(-50%) scaleY(0.5);
    z-index: 0;
  }
  span{
    position: relative;
    padding: 0 0.5rem;
    background-color: #fff;
    z-index: 1;
  }
}
.contact-me{
  width: 8rem;
  margin: 0 auto;

  li{
    text-align: left;
    margin: 1rem 0rem;
    padding-left: 1.5rem;
    color: #ccc;
    font-size: 12px;

    i{

      &::before{
        color: #ccc;
        padding-right: 0.5rem;
      }
    }
  }
}
</style>
