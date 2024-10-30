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
    <div className="max-w-screen-lg mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold mb-4 text-green-400">{post.title}</h2>
      <p className="text-lg text-gray-300 mb-6">{post.body}</p>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
        <CommentForm />
      </div>

      {post.clerk_id && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-2xl font-semibold mb-4">Comments</h3>
          <CommentForm postId={post.id} />
          <CommentsList postId={post.id} />
        </div>
      )}

      <div className="flex space-x-4 mt-6">
        <EditPostButton
          postId={post.id}
          initialContent={post.body}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        />
        {post.clerk_id && (
          <DeletePostButton
            postId={post.id}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          />
        )}
      </div>
    </div>
  );
}
