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
            <UpVoteButton article_id={article.article_id} setArticleVotes={setArticleVotes} />
            <DownVoteButton article_id={article.article_id} setArticleVotes={setArticleVotes} />
        </div>
        
        <CommentSection article_id={article.article_id} />
      </div>
    );
  }
}

function VoteCounter({articleVotes}){
    return <h4>Votes: {articleVotes}</h4>
}

function UpVoteButton({ article_id, articleVotes, setArticleVotes }) {
  const onClick = () => {
    setArticleVotes((current) => current + 1);
    incArticleVote(article_id, 1).catch((err) => {
        setArticleVotes((current) => current - 1);
        // Enter more elaborate error handling here...
        console.log('Oops...')
    });
  };
  return <button className='vote-button' onClick={onClick}>+1</button>;
}

function DownVoteButton({ article_id, articleVotes, setArticleVotes }) {
    const onClick = () => {
      setArticleVotes((current) => current - 1);
      incArticleVote(article_id, -1).catch((err) => {
          setArticleVotes((current) => current + 1);
          // Enter more elaborate error handling here...
          console.log('Oops...')
      });
    };
    return <button className='vote-button' onClick={onClick}>-1</button>;
  }
