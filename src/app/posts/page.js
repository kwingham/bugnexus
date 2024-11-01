import { auth } from "@clerk/nextjs/server";
import { connect } from "@/utilities/db";
import Link from "next/link";
import CodeHighlighter from "@/components/CodeHighlighter";
import Search from "@/components/Search";
import News from "@/components/news";

export default async function PostPage() {
  const { userId } = await auth();
  const db = connect();

  const userResult = await db.query(
    `SELECT id FROM clerk_users WHERE clerk_id = $1`,
    [userId]
  );

  const userExists = userResult.rowCount > 0;

  const postsResult = await db.query(
    `SELECT posts.id, posts.title, posts.body, clerk_users.username 
     FROM posts 
     JOIN clerk_users ON posts.clerk_id = clerk_users.clerk_id`
  );
  const posts = postsResult.rows;

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 text-white min-h-screen">
      <div className="flex-1 p-4">
        {userExists ? (
          <Link
            className="flex py-3 text-lg font-semibold text-gray-900 bg-green-400 rounded-lg hover:bg-green-500 transition-colors justify-center mb-6"
            href="/add-post"
          >
            Add Post
          </Link>
        ) : (
          <Link
            className="flex py-3 text-lg font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors justify-center mb-6"
            href="/profile/updateProfile"
          >
            Please create a profile before posting
          </Link>
        )}

        {posts.map((post, index) => (
          <div
            key={post.id}
            className={`max-w-screen-lg mx-auto p-6 mt-6 rounded-lg shadow-lg ${
              index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
            }`}
          >
            <Link
              href={`/posts/${post.id}`}
              className="text-2xl font-semibold text-green-400 hover:underline"
            >
              {post.title}
            </Link>
            <div className="mt-4">
              <CodeHighlighter language="javascript" code={post.body} />
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Posted by {post.username}
            </p>
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
