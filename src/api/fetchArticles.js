const axios = require('axios')

function fetchArticles(){
    return axios.get('https://nc-news-yxyq.onrender.com/api/articles')
}

module.exports = {fetchArticles}