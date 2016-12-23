const HOME_MUTATIONS = {
  CHANGE_ARTICLELIST (state, articleList) {
    let isDefault = state.HOME.articleList[0].isDefault
    if (isDefault) {
      state.HOME.articleList = articleList
    } else {
      state.HOME.articleList = state.HOME.articleList.concat(articleList)
    }
  },
  SHOW_BTN_LOADING (state) {
    state.HOME.loading = !state.HOME.loading
  },
  SHWO_BTN_DISABLE (state) {
    state.HOME.nomore = !state.HOME.nomore
  }
}

const ARTICLE_MUTATIONS = {
  CHANGE_ONE_ARTICLE (state, article) {
    state.ARTICLE.article = article[0]
  }
}

const LIST_MUTATIONS = {
  CHANGE_ALL_ARTICLES_LIST (state, list) {
    state.LIST.articlesList = list
  }
}

export const mutations = {
  ...HOME_MUTATIONS,
  ...ARTICLE_MUTATIONS,
  ...LIST_MUTATIONS,
  LOADING_COMPONENT_SHOW (state) {
    state.loading = true
  },
  LOADING_COMPONENT_HIDE (state) {
    state.loading = false
  }
}
