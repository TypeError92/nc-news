import { CommentCard } from './CommentCard';
import { fetchComments } from '../../../api';
import { useEffect, useState } from 'react';

export function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </ul>
  );
}
