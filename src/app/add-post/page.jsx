import { auth } from "@clerk/nextjs/server";
import { SignInButton } from "@clerk/nextjs";
import { connect } from "@/utilities/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addPost() {
  const { userId } = await auth();

  async function savePost(formData) {
    "use server";
    const content = formData.get("content");
    const title = formData.get("title");
    if (!userId) {
      throw new Error("You need to login");
    }

    const db = connect();
    await db.query(
      "INSERT INTO posts (title, body, clerk_id) VALUES ($1, $2, $3)",
      [title, content, userId]
    );

    revalidatePath("/posts");
    redirect("/posts");
  }

  if (!userId) {
    return (
      <div className="max-w-screen-lg mx-auto p-4 mt-10">
        You need to login to create a post <SignInButton />
      </div>
    );
  }

  return (
    <div className="max-w-screen-md mx-auto mt-16 p-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-green-400 mb-6 text-center">
        Create a New Post
      </h2>
      <form action={savePost} className="flex flex-col space-y-6">
        <input
          type="text"
          name="title"
          placeholder="Enter post title..."
          className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <textarea
          name="content"
          placeholder="Write your content here..."
          className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 h-40 resize-none"
        />
        <button
          type="submit"
          className="w-full py-3 text-lg font-semibold text-gray-900 bg-green-400 rounded-lg hover:bg-green-500 transition-colors"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}
