import { postComment } from '../../../api';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../contexts/User';
import { useParams } from 'react-router-dom';

export function NewCommentForm({ comments, isPosting, setComments, setIsPosting}) {
  const {article_id} = useParams()
  const [newCommentBody, setNewCommentBody] = useState('');
  const {user} = useContext(UserContext)
  
  function onSubmit(e) {
    e.preventDefault();
    setIsPosting(true)
    postComment(article_id, user.username, newCommentBody)
    .then(({data}) => {
        setComments((current) => { 
            return [data.new_comment, ...current]
        })
        setIsPosting(false)
        setNewCommentBody('')
    })
    .catch((err) => {
        setIsPosting(false)
        alert('Your comment could not be posted - please check your internet connection and try again.')
    })
  }

  return (
    <li>
      <form className="comment-card" id="new-comment-form" onSubmit={onSubmit}>
        <textarea
          id="new-comment-input"
          onChange={({ target }) => setNewCommentBody(target.value)}
          placeholder={
            comments.length ? 'Write something!' : 'Be the first to comment!'
          }
          value={newCommentBody}
        />
        <button type="button" disabled={isPosting || !newCommentBody.length} onClick={(e) => {setNewCommentBody('')}}>
          Cancel
        </button>
        <button type="submit" disabled={isPosting || !newCommentBody.length}>
          Comment
        </button>
      </form>
    </li>
  );
}
