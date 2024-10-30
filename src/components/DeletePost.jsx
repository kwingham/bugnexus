import { connect } from "@/utilities/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function DeletePostButton({ postId }) {
  async function handleDelete(formData) {
    "use server";

    const postId = formData.get("postId");
    const db = connect();
    try {
      await db.query("DELETE FROM posts WHERE id = $1", [postId]);
    } catch (error) {
      console.error(error);
    }
    revalidatePath("/posts");
    redirect("/posts");
  }

  return (
    <form action={handleDelete}>
      <input type="hidden" name="postId" value={postId} />
      <button
        type="submit"
        className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >
        Delete
      </button>
    </form>
  );
}
