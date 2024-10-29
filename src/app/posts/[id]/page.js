import { connect } from "@/utilities/db";
import DeletePostButton from "@/components/DeletePost";
import EditPostButton from "@/components/EditPost";

export default async function SingularPostPage({params}) {
    
    const db = connect();

    const req = await db.query(`SELECT * FROM posts WHERE id = $1`, [params.id])
    const post = await req.rows[0]


    return (
        <div>
            {params.id}
            <h1>Singular Post Page</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
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