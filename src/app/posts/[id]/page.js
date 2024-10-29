
import { connect } from "@/utilities/db";

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
        </div>
    )
}