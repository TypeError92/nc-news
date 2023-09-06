export function CommentCard({comment}){
    return (
    <li className="comment-card">
        <div className="comment-header">
            <h4>{comment.author}</h4>
            <h4>{new Date(comment.created_at).toDateString()}</h4>
            <h4>Votes: {comment.votes}</h4>

        </div>

        <p>{comment.body}</p>
    </li>)
}