import {fetchArticle} from "../../api"
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

export function ArticleView(){
    const {article_id} = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetchArticle(article_id).then(({data}) => {
            setIsLoading(false)
            setArticle(data.article)
        })
        
    }, [])

    if (isLoading){
        return <p>Loading...</p>
    } else {
        const date = new Date(article.created_at).toDateString()
        console.log(date)

        return (
            <div id='article-view'>
                <img src={article.article_img_url} alt={article.title}/>
                <h1>{article.title}</h1>
                <h2>#{article.topic}</h2>
                <h3>{date}</h3>
                <h2>by {article.author}</h2>
                <p>{article.body}</p>
            </div>
        )
    }

}
