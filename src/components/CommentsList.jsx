import { connect } from "@/utilities/db";
import CommentForm from "./CommentForm";

export async function CommentsList({
  postId,
  parentCommentId = null,
  level = 0,
}) {
  const db = connect();
  const commentQuery = `SELECT comments.id, comments.body, clerk_users.username 
     FROM comments 
     JOIN clerk_users ON comments.clerk_id = clerk_users.clerk_id 
     WHERE comments.post_id = $1 
       AND comments.parent_comment_id ${parentCommentId ? "= $2" : "IS NULL"}`;

  const commentsArgs = [postId];

  if (parentCommentId) {
    commentsArgs.push(parentCommentId);
  }

  const comments = await db.query(commentQuery, commentsArgs);

  const borderColor = level % 2 === 0 ? "border-green-300" : "border-blue-300";

  return (
    <ul className="space-y-4 max-w-full">
      {comments.rows.map((comment) => (
        <li
          key={comment.id}
          className={`bg-gray-800 p-4 rounded-lg shadow-md border ${borderColor}`}
        >
          <div className="mb-2">
            <span className="text-green-400 font-semibold">
              {comment.username}
            </span>
          </div>
          <div className="text-gray-300">
            <p className="mb-4">{comment.body}</p>
            <CommentForm postId={postId} parentCommentId={comment.id} />
            <div className="pl-4 md:pl-6 mt-4 max-w-full">
              <CommentsList
                postId={postId}
                parentCommentId={comment.id}
                level={level + 1}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
