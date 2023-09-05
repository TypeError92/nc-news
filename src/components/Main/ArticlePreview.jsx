function ArticlePreview({article}){
    return (
        <li className="article-preview">
            <p>{article.title}</p>
            <p>created @{article.created_at}</p>
            <p>by {article.author}</p>
            <img src={article.article_img_url} alt={article.title}/>
            <p>{article.topic}</p>
        </li>
    )

}

export default ArticlePreview