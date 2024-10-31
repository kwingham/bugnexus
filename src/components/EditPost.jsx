import { connect } from "@/utilities/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function EditPostButton({ postId, initialContent }) {
  async function handleEdit(formData) {
    "use server";

    const postId = formData.get("postId");
    const newContent = formData.get("content");
    const db = connect();

    try {
      await db.query("UPDATE posts SET body = $1 WHERE id = $2", [
        newContent,
        postId,
      ]);
    } catch (error) {
      console.error(error);
    }

    revalidatePath(`/posts`);
    redirect(`/posts/`);
  }

  return (
    <form action={handleEdit} className="mb-4">
      <input type="hidden" name="postId" value={postId} />
      <textarea
        name="content"
        defaultValue={initialContent}
        className="border rounded-md p-2 w-full text-black"
        required
      />
      <button
        type="submit"
        className="mt-2 py-2 px-4 bg-green-400 text-gray-900 rounded-md hover:bg-green-500 transition"
      >
        Save Changes
      </button>
    </form>
  );
}
