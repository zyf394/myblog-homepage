import axios from 'axios'

export const API = {
  getArticles (postData) {
    return axios.post('/api/article/index', postData)
  },
  getOneArticle (id) {
    return axios.post('/api/article/index', {id: id})
  },
  getArticlesList (postData) {
    return axios.post('/api/article/list', postData)
  }
}
