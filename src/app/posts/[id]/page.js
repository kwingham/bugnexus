import { connect } from "@/utilities/db";
import CommentForm from "@/components/CommentForm";
import DeletePostButton from "@/components/DeletePost";
import EditPostButton from "@/components/EditPost";
import { CommentsList } from "@/components/CommentsList";
import { auth } from "@clerk/nextjs/server";

export default async function SingularPostPage({ params }) {
  const { id } = await params;
  const { userId } = await auth();

  const db = connect();
  const req = await db.query(`SELECT * FROM posts WHERE id = $1`, [id]);
  const post = req.rows[0];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 flex flex-col items-center">
      <div className="w-full max-w-screen-lg bg-gray-800 p-10 rounded-lg shadow-lg mt-10">
        <h2 className="text-5xl font-bold text-green-400 mb-6">{post.title}</h2>
        <p className="text-lg text-gray-300 mb-8">{post.body}</p>

        <div className="flex space-x-4 mt-8">
          <p>Update post information: </p>
          {post.clerk_id === userId && (
            <EditPostButton
              postId={post.id}
              initialContent={post.body}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
            />
          )}
          {post.clerk_id === userId && (
            <DeletePostButton
              postId={post.id}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition-colors"
            />
          )}
        </div>

        <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8 border border-gray-600">
          <CommentForm />
        </div>

        {post.clerk_id && (
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg mt-8 border border-gray-600">
            <h3 className="text-3xl font-semibold text-green-400 mb-6">
              Comments
            </h3>
            <div>
              <CommentForm postId={post.id} />
            </div>
            <div>
              <CommentsList postId={post.id} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
