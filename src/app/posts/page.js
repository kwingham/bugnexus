import News from "@/components/news";
import { connect } from "@/utilities/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";


export default async function PostPage() {

    const {userId} = auth();
    const db = connect();
    const posts = await db.query(`SELECT * FROM posts`);


    console.log(posts);


    return(
        <div className="flex flex-row">
            <div className="flex-1">
                {posts.rows.map((post) => {
                    return (
                    <div key={post.id} className="max-w-screen-lg mx-auto p-4 bg-zinc-800 mt-10 rounded-xl" >
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    {/* <p>{post.body}</p> */}
                    </div> 
                    )
                })} 
                
           </div>
           <div className="lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]">
                <div className="sticky top-0 border-white p-2">
                <input type="text" placeholder="Search" className="border border-gray-200 rounded-3xl text-sm px-4 py-2"></input>
                <News />
                </div>
            </div>
        </div>


    )
}
