import { API } from '../api'

export const actions = {
  CHANGE_ARTICLELIST ({ commit }, posData) {
    return new Promise((resolve, reject) => {
      API.getArticles(posData)
        .then((response) => {
          commit('CHANGE_ARTICLELIST', response.data)
          resolve(response.data)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  },
  CHANGE_ONE_ARTICLE ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.getOneArticle(id)
        .then((response) => {
          commit('CHANGE_ONE_ARTICLE', response.data)
          resolve(response.data)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  },
  CHANGE_ALL_ARTICLES_LIST ({ commit }, posData) {
    return new Promise((resolve, reject) => {
      API.getArticlesList(posData)
        .then((response) => {
          commit('CHANGE_ALL_ARTICLES_LIST', response.data)
          resolve(response.data)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  }
}
