import News from "@/components/news";
import Search from "@/components/Search";
import { connect } from "@/utilities/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function PostPage() {
  const { userId } = auth();
  const db = connect();
  const posts = await db.query(`SELECT * FROM posts`);

  console.log(posts);

  return (
    <div className="flex flex-row bg-gray-900 text-white min-h-screen">
      <div className="flex-1 p-4">
        {posts.rows.map((post) => (
          <div
            key={post.id}
            className="max-w-screen-lg mx-auto p-6 bg-gray-800 mt-6 rounded-lg shadow-lg"
          >
            <Link
              href={`/posts/${post.id}`}
              className="text-2xl font-semibold text-green-400 hover:underline"
            >
              {post.title}
            </Link>
            <p className="mt-2 text-gray-300">{post.body}</p>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex lg:flex-col w-80 p-4 h-screen bg-gray-800 border-l border-gray-700">
        <div className="sticky top-0 space-y-6">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <Search />
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <News />
          </div>
        </div>
      </div>
    </div>
  );
}
