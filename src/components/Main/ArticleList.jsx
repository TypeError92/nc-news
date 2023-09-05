import fetchArticles from '../../api/fetchArticles'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ArticleList({filter}){
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetchArticles().then(({data}) => {
            setIsLoading(false)
            setArticles(data.articles)
        })
        
    }, [])

    if (isLoading){
        return <p>Loading...</p>
    } else {
        return (
            <ul className='article-list'>
                {articles.map((article) => {
                    console.log(article.title)
                    return <li key={article.article_id}>{article.title}</li>
                })}
            </ul>
        )
    }
}

export default ArticleList