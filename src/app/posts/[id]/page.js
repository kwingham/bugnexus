import { connect } from "@/utilities/db";
import CommentForm from "@/components/CommentForm";
import DeletePostButton from "@/components/DeletePost";
import EditPostButton from "@/components/EditPost";
import { CommentsList } from "@/components/CommentsList";

export default async function SingularPostPage({ params }) {

  const { id } = await params;
  
  const db = connect();
  const req = await db.query(`SELECT * FROM posts WHERE id = $1`, [id]);
  const post = req.rows[0];

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div>
        <CommentForm />
      </div>
      {post.clerk_id && (
        <div>
        comments-list
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div>
            <CommentForm postId={post.id}/>
            <CommentsList postId={post.id}/>
            </div>
              <div>
                <EditPostButton
                  postId={post.id}
                  initialContent={post.body}
                  className="text-black"
                />
                 {post.clerk_id && (
                <div>
                  <DeletePostButton postId={post.id} />
                </div>
              )}
              </div
          <DeletePostButton postId={post.id} />
        </div>
      )}
    </div>
  );
}
