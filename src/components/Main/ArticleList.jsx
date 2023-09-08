import {ArticlePreview} from './ArticlePreview';
import {fetchArticles} from '../../api'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// I didn't get to more refined searches during backend, so for now, I'm filtering results locally.

export function ArticleList({filter}){
    if (filter) filter = useParams()[filter]
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetchArticles().
        then(({data}) => {
            setIsLoading(false)
            setArticles(data.articles.filter((article) => {
                return filter ? article.topic === filter : true
            }))
        })
        
    }, [filter])

    if (isLoading){
        return <p>Loading...</p>
    } else {
        return (
            <ul className='article-list'>
                {articles.map((article) => {
                    return <ArticlePreview key={article.article_id} article={article}/>
                })}
            </ul>
        )
    }
}
