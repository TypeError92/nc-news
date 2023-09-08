import { CommentSection } from './comments/CommentSection';
import { incArticleVote, fetchArticle } from '../../api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function ArticleView() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [articleVotes, setArticleVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchArticle(article_id).then(({ data }) => {
      setIsLoading(false);
      setArticle(data.article);
      setArticleVotes(data.article.votes);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    const date = new Date(article.created_at).toDateString();

    return (
      <div id="article-view">
        <img src={article.article_img_url} alt={article.title} />
        <h1>{article.title}</h1>
        <h2>#{article.topic}</h2>
        <h3>{date}</h3>
        <h2>by {article.author}</h2>
        <p>{article.body}</p>
        <div className='article-votes'>
            <VoteCounter articleVotes={articleVotes}/>
            <VoteButton article_id={article.article_id} setArticleVotes={setArticleVotes} inc_votes={1}/>
            <VoteButton article_id={article.article_id} setArticleVotes={setArticleVotes} inc_votes={-1}/>
        </div>
        
        <CommentSection article_id={article.article_id} />
      </div>
    );
  }
}

function VoteCounter({articleVotes}){
    return <h4>Votes: {articleVotes}</h4>
}

function VoteButton({ article_id, setArticleVotes, inc_votes}) {
  const onClick = () => {
    setArticleVotes((current) => current + inc_votes);
    incArticleVote(article_id, inc_votes).catch((err) => {
        setArticleVotes((current) => current - inc_votes);
        alert('Your vote could not be logged - please try again later!')
    });
  };
  return <button className='vote-button' onClick={onClick}>{inc_votes > 0 ? '+' : '-'}</button>;
}

