<template>
 <div>
  <nav class="mobile-bar iconfont">
    <i v-on:click="showMenu">&#xe624;</i>
    <h1 v-show="!isIndex">Shuiyi's Blog</h1>
  </nav>
  <div v-bind:class="['mobile-nav-list',menuOpen ? '' : 'expand']" v-on:touchmove.prevent>
    <ul >
      <li v-for="item in menu" v-on:click="routeOut">
        <router-link :to="{ path: item.href }" ><i class="iconfont" v-bind:class="item.icon"></i>{{item.name}}</router-link>
      </li>
    </ul>
  </div>
  <nav class="menu" >
    <ul>
      <li v-for="item in menu">
      <router-link :to="{ path: item.href }" ><i class="iconfont" v-bind:class="item.icon"></i>{{item.name}}</router-link>
      </li>
    </ul>
  </nav>
 </div>
</template>

<script>
  var menu = [
    {
      name: 'Home',
      icon: 'icon-37',
      href: '/'
    },
    {
      name: 'List',
      icon: 'icon-67',
      href: '/list'
    },
    {
      name: 'About',
      icon: 'icon-40',
      href: '/about'
    }
  ]

  export default {
    data () {
      return {
        menu: menu,
        menuClass: 'menu',
        menuOpen: false,
        isIndex: window.location.pathname === '/'
      }
    },
    watch: {
      '$route' (to, from) {
        this.isIndex = to.path === '/'
      }
    },
    methods: {
      showMenu: function (event) {
        this.menuOpen = !this.menuOpen
      },
      routeOut: function () {
        this.menuOpen = false
      }
    },
    mounted () {
      this.$nextTick(function () {
        // var navList = document.querySelector('.mobile-nav-list')
        var navSwitchBtn = document.querySelector('.mobile-bar > i')
        document.addEventListener('click', function (event) {
          var target = event.target
          // var eventPath = event.path
          var isInNavList = true
          var isNavSwitchBtn = target === navSwitchBtn
          while (target && target.className.indexOf('mobile-nav-list') === -1) {
            target = target.parentNode
            isInNavList = false
            if (target === document) {
              break
            }
          }

          if (!isInNavList && !isNavSwitchBtn) {
            this.menuOpen = false
          }
        })
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" type="text/css" lang="less" scoped>
  .mobile-bar,.mobile-nav-list{
    display: none;
  }
  .menu {
    padding: 0.5rem 6rem;
    width: 100%;
    box-shadow: 0 0 4px rgba(0,0,0,0.25);

    h3 {
      font-size:16px ;
      color: #fff;
    }
    ul {
      display: flex;
      flex-flow: row nowrap;
      justify-content:space-around;
      max-width: 720px;
      margin: 0 auto;

      li {
        display: inline-block;
        list-style: none;
        text-align: left;
        padding: 0.5rem 0;
        margin: 0 0.6em;
        a {
          color: #b8b8b8;
          font-size: 14px;
          font-weight: 100;

          i{
            padding-right: 0.5rem;
          }

          &::before{
            padding-right: 0.5rem;
          }
          &:hover,&:active {
            color: #000;
          }
        }
      }
    }
  }
  @media screen and (max-width: 720px){
    .mobile-bar{
      display: block;
      position: relative;
      height: 3rem;
      z-index: 3;
      width: 100%;
      box-shadow: 0 0 4px rgba(0,0,0,0.25);
      text-align: center;
      position: relative;

      i{
        position: absolute;
        left: 1.5rem;
        top: 50%;
        display: inline-block;
        padding: 0.5rem 0;
        font-style: normal;
        color: #b8b8b8;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);

      }
      h1{
        display: inline-block;
        line-height: 3rem;
        color: #308ddf;
        font-weight: 100;
        text-align: center;
        font-family: "Helvetica Neue", Helvetica, 'Source Sans Pro',  Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
      }
    }
    .mobile-nav-list{
      display: block;
      position: absolute;
      top: 3rem;
      flex-flow: column nowrap;
      z-index: 2;
      width: 100%;
      height: 100%;

      background:rgba(0, 0, 0, 0.2);
      box-shadow: none;

      transform: translateX(0%);
      transition: all .3s ease;

      /* 必需 */
      &.expand {
        transform: translateX(-100%);
      }

      /* .expand-enter 定义进入的开始状态 */
      /* .expand-leave 定义离开的结束状态 */
      &.expand-enter, &.expand-leave-active {
        transform: translateX(-100%);
      }


      ul{
        width: 50%;
        height: 100%;
        padding: 0 0.6rem 0.6rem;
        background: #fafafa;
        li{
          a{
            display: block;
            color: #ccc;
            padding: 0.8rem 0;

            i{
              margin-right: 0.5rem;
              color: #ccc;
            }
          }
          &::after{
            content: '';
            display: block;
            height: 1px;
            transform: scaleY(0.5);
            background: rgba(204,204,204,0.3);
          }
        }
      }

    }

    .menu{
      display: none;
    }
  }
</style>
