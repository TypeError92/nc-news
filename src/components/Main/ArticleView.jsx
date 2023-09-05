import fetchArticle from "../../api"

function ArticleView(){
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetchArticle().then(({data}) => {
            setIsLoading(false)
            setArticle(data.article)
            console.log(data.article)
        })
        
    }, [])

    if (isLoading){
        return <p>Loading...</p>
    } else {
        return (
            <div id='article-view'>
                <img src={article.article_img_url} alt={article.title}/>
                <h1>{article.title}</h1>
            </div>
        )
    }

}

export default ArticleView