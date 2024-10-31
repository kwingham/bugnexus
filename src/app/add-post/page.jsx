import { auth } from "@clerk/nextjs/server";
import { SignInButton } from "@clerk/nextjs";
import { connect } from "@/utilities/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const metadata = {
  title: "BugNexus | Post an issue",
  description:
    "BugNexus - the place for beginners to ask for help with their code",
  icons: {
    icon: "/favicon.ico",
  },
};

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
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-10">
      <div className="max-w-screen-md w-full bg-gray-800 text-white rounded-lg shadow-lg p-8">
        <h2 className="text-5xl font-bold text-green-400 mb-6 text-center">
          Create a New Post
        </h2>
        <form action={savePost} className="flex flex-col space-y-6">
          <input
            type="text"
            name="title"
            placeholder="Enter post title..."
            className="px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            name="content"
            placeholder="Write your content here..."
            className="px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 h-40 resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-gray-900 bg-green-400 rounded-lg hover:bg-green-500 transition-colors"
          >
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
}
