const axios = require('axios')
const api = axios.create({baseUrl: 'https://nc-news-yxyq.onrender.com/api'})

module.exports = {api}