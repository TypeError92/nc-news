import axios from 'axios'

function fetchArticles(){
    return axios.get('https://nc-news-yxyq.onrender.com/api/articles')
}

export default fetchArticles