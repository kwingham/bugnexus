import { connect } from "@/utilities/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function EditPostButton({ postId, initialContent }) {
  // Function to edit post content by current user
  async function handleEdit(formData) {
    "use server";

    const postId = formData.get("postId");
    const newContent = formData.get("content");
    const db = connect();

    try {
      await db.query("UPDATE posts SET body = $1 WHERE id = $2", [newContent, postId]);
      // console.log(`${postId} updated successfully`);
    } catch (error) {
      console.error(error);
    }

    // Revalidate the page after editing
    revalidatePath(`/posts`);
    // Redirect to the updated post or posts list
    redirect(`/posts/`);
  }

  return (
    <form action={handleEdit}>
      <input type="hidden" name="postId" value={postId} />
      <textarea
        name="content"
        defaultValue={initialContent}
        className="border rounded-md p-2 w-full text-black"
        required
      />
      <button
        type="submit"
        className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Save Changes
      </button>
    </form>
  );
}
