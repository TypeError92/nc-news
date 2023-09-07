import { CommentCard } from './CommentCard';
import { fetchComments } from '../../../api';
import { NewCommentForm } from './NewCommentForm';
import { useEffect, useState } from 'react';

export function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchComments(article_id).then(({ data }) => {
      setIsLoading(false);
      setComments(data.comments);
    });
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <ul className="comment-list">
      <NewCommentForm key={0} comments={comments} isPosting={isPosting} setComments={setComments} setIsPosting={setIsPosting}/>
      {isPosting && <li key='isPosting'>Posting...</li>}
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </ul>
  );
}
