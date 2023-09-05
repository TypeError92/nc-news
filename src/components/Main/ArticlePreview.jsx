import { Link } from 'react-router-dom'

export function ArticlePreview({article}){
    return (
        <li className="article-preview">
            <img src={article.article_img_url} alt={article.title}/>
            <Link to={`/articles/id/${article.article_id}`}>{article.title}</Link>
            <p>created @{article.created_at}</p>
            <p>by {article.author}</p>
            <p>{article.topic}</p>
        </li>
    )

}
