import { auth } from "@clerk/nextjs/server";
import { SignInButton } from "@clerk/nextjs";
import { connect } from "@/utils/db";

export default async function addPost() {
  const { userId } = auth();
  console.log("*********", userId) //********* undefined
  const db = connect();
  async function savePost(formData) {
    "use server";
    const content = formData.get("content");
    const title = formData.get("title");
    if (!userId) {
      throw new Error("You need to login");
    }

    await db.query(
      "INSERT INTO posts (title, body, clerk_id) VALUES ($1, $2, $3)",
      [title, content, userId]
    );

    revalidatePath("/");
    redirect("/");
  }

//   if (!userId) {
//     return (
//       <div className="max-w-screen-lg mx-auto p-4 mt-10">
//         You need to login to create a post <SignInButton />
//       </div>
//     );
//   }

// will add this back in when we have resolved issue with adding clerk_id in to the database.

  return (
    <div className="max-w-screen-lg mx-auto p-4 bg-zinc-800 mt-10 rounded-xl">
      <h2 className="text-3xl mb-4">Add a new post</h2>
      <form action={savePost} className="flex flex-col space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Post title..."
          className="text-black px-3 py-2 rounded"
        />
        <textarea
          name="content"
          className="text-black px-3 py-2 rounded"
          placeholder="Post content"
        />
        <button className="bg-green-400 px-4 py-2 text-xl text-black rounded">
          Submit post
        </button>
      </form>
    </div>
  );
}
