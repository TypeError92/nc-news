import {ArticlePreview} from './ArticlePreview';
import {fetchArticles} from '../../api'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function ArticleList({topic}){
    const [sortBy, setSortBy] = useState('created_at')
    const [order, setOrder] = useState('desc')
    if (topic) topic = useParams()[topic]
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetchArticles(sortBy, order, topic).
        then(({data}) => {
            setIsLoading(false)
            setArticles(data.articles)

        })
        
    }, [topic, sortBy, order])

    if (isLoading){
        return <p>Loading...</p>
    } else {
        return (
            <>
            <SearchBar setSortBy={setSortBy} setOrder={setOrder}/>
            <ul className='article-list'>
                {articles.map((article) => {
                    return <ArticlePreview key={article.article_id} article={article}/>
                })}
            </ul>
            </>
        )
    }
}

// I might add an actual search bar here later (one that can search by article content)
function SearchBar({setSortBy, setOrder}) {
  function onChange(e) {
    switch(e.target.value){
        case 'Date: new to old':
            setSortBy('created_at')
            setOrder(('desc'))
            break;
        case 'Date: old to new':
            setSortBy('created_at')
            setOrder('asc')
            break;
        case 'Comments: max to min':
            setSortBy('comment_count')
            setOrder('desc')
            break;
        case 'Comments: min to max':
            setSortBy('comment_count')
            setOrder('asc')
            break;
        case 'Votes: max to min':
            setSortBy('votes')
            setOrder('desc')
            break;
        case 'Votes: min to max':
            setSortBy('votes')
            setOrder('asc')
            break;
    }
  }
  return (
    <select onChange={onChange}>
        <option>Date: new to old</option>
        <option>Date: old to new</option>
        <option>Comments: max to min</option>
        <option>Comments: min to max</option>
        <option>Votes: max to min</option>
        <option>Votes: min to max</option>
    </select>
  )
}