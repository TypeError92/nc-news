import axios from 'axios'
const api = axios.create({baseURL: 'https://nc-news-yxyq.onrender.com/api'})

function fetchArticles(){
    return api.get('/articles')
}

export default fetchArticles