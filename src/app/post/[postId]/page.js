import { connect } from "@/app/lib/connect";
import { auth } from "@clerk/nextjs/server";


export default async function PostPage() {

    const {userId} = auth();
    const db = connect();
    const posts = await db.query(`SELECT * FROM posts`);


    console.log(posts);


    return(
        <div>
              <h1>Posts page</h1>
                {posts.rows.map((post) => {
                    return (
                    <div key={post.id} className="bg-slate-600 text-white px-3 py-1 rounded-xl h-36 shadow-2xl m-6" >
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <p>{post.clerk_id}</p>
                </div> 
              )
            })}      

        </div>


    )
}
