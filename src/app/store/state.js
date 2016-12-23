export const state = {
  HOME: {
    loading: false,
    nomore: false,
    articleList: [{
      isDefault: true,
      item: '',
      content: ''
    }]
  },
  ARTICLE: {
    article: {
      title: '',
      content: '',
      author: '',
      publishTime: ''
    }
  },
  LIST: {
    articlesList: {}
  },
  ABOUT: {
    icons: {
      GITHUB: {
        icon: 'icon-github',
        link: 'https://github.com/zyf394'
      },
      WEIBO: {
        icon: 'icon-unie61d',
        link: 'http://weibo.com/1701938860/profile?topnav=1&wvr=6'
      },
      EMAIL: {
        icon: 'icon-youxiang',
        link: 'mailto:78524427@qq.com'
      }
    }
  },
  loading: true
}
