import { connect } from "@/utilities/db";
import CommentForm from "@/components/CommentForm";
import DeletePostButton from "@/components/DeletePost";
import EditPostButton from "@/components/EditPost";

export default async function SingularPostPage({params}) {
    
    const db = connect();
    const postParams = await params

    const req = await db.query(`SELECT * FROM posts WHERE id = $1`, [postParams.id])
    const post = await req.rows[0]


    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div>
            <CommentForm />
            </div>
              <div>
                <EditPostButton
                  postId={post.id}
                  initialContent={postParams.body}
                  className="text-black"
                />
                {post.clerk_id && (
                <div>
                  <DeletePostButton postId={postParams.id} />
                </div>
              )}
              </div>
        </div>
    )
}