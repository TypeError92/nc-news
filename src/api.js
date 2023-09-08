import axios from 'axios'
const api = axios.create({baseURL: 'https://nc-news-yxyq.onrender.com/api'})

export function incArticleVote(article_id, inc_votes){
    return api.patch(`articles/${article_id}`, {inc_votes})
}

export function fetchArticles(sort_by, order, topic){
    return api.get(`articles?sort_by=${sort_by}&order=${order}${topic ? `&topic=${topic}` : ''}`)
}

export function fetchArticle(article_id){
    return api.get(`articles/${article_id}`)
}

export function fetchComments(article_id){
    return api.get(`articles/${article_id}/comments`)
}

export function fetchTopics(){
    return api.get('topics')
}

export function postComment(article_id, username, body){
    return api.post(`articles/${article_id}/comments`, {username, body})
}
