import { connect } from "@/utilities/db";
import CommentForm from "@/components/CommentForm";
import DeletePostButton from "@/components/DeletePost";
import EditPostButton from "@/components/EditPost";
import { CommentsList } from "@/components/CommentsList";

export default async function SingularPostPage({params}) {

    const postId = params.postId;
    
    const db = connect();

    const req = await db.query(`SELECT * FROM posts WHERE id = $1`, [params.id])
    const post = await req.rows[0]


    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div>
            <CommentForm postId={post.id}/>
            <CommentsList postId={post.id}/>
            </div>
            {post.clerk_id && (
                <div>
                  <DeletePostButton postId={post.id} />
                </div>
              )}
              <div>
                <EditPostButton
                  postId={post.id}
                  initialContent={post.body}
                  className="text-black"
                />
              </div>
        </div>
    )
}