import { connect } from "@/utilities/db";
import CommentForm from "./CommentForm";

export async function CommentsList({ postId, parentCommentId = null }) {

  const db = connect();
  const commentQuery = `SELECT comments.id, comments.body, clerk_users.username 
     FROM comments 
     JOIN clerk_users ON comments.clerk_id = clerk_users.clerk_id 
     WHERE comments.post_id = $1 
       AND comments.parent_comment_id ${parentCommentId ? '= $2' : 'IS NULL'}`
      
  const commentsArgs = [postId];

  if (parentCommentId) {
    commentsArgs.push(parentCommentId);
  }


  const comments = await db.query(commentQuery, commentsArgs);

     console.log("this is the message we are looking for", comments)

  // const comments = await db.query(`SELECT id, body, clerk_id FROM comments JOIN clerk_users ON comments.clerk_id = clerk_users.id WHERE post_id = $1 AND parent_comment_id ${parentCommentId ? `= $2` : `IS NULL`}`, [postId, parentCommentId]);

  return (
    <ul>
      {comments.rows.map((comment) => (
        <li key={comment.id}>
          <div>
            <span>{comment.name}</span>
          </div>
          <div>
            <span>{comment.body}</span>
            <CommentForm postId={postId} parentCommentId={comment.id} />
            <CommentsList postId={postId} parentCommentId={comment.id} />
          </div>
        </li>
      ))}
    </ul>
  );
}