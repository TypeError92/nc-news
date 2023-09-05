import axios from 'axios'
const api = axios.create({baseURL: 'https://nc-news-yxyq.onrender.com/api'})

export function fetchArticles(){
    return api.get('/articles')
}

export function fetchArticle(article_id){
    return api.get(`articles/${article_id}`)
}
