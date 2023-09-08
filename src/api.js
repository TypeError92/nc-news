import axios from 'axios'
const api = axios.create({baseURL: 'https://nc-news-yxyq.onrender.com/api'})

export function incArticleVote(article_id, inc_votes){
    return api.patch(`articles/${article_id}`, {inc_votes})
}

export function fetchArticles(){
    return api.get('/articles')
}

export function fetchArticle(article_id){
    return api.get(`articles/${article_id}`)
}

export function fetchComments(article_id){
    return api.get(`articles/${article_id}/comments`)
}

export function postComment(article_id, username, body){
    return api.post(`articles/${article_id}/comments`, {username, body})
}
