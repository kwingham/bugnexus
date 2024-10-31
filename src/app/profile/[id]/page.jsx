import { connect } from "@/utilities/db";
import { notFound } from "next/navigation";

export const metadata = {
  title: "BugNexus | Someones Profile",
  description:
    "BugNexus - the place for beginners to ask for help with their code",
  icons: {
    icon: "/favicon.ico",
  },
};

export async function generateMetadata({ params }) {
  const db = connect();

  const user = (
    await db.query("SELECT * FROM clerk_users WHERE id = $1", [params.id])
  ).rows[0];
  return {
    title: `BugNexus | ${user.username}'s profile`,
    description: `Profile Page for  ${user.username}`,
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function ProfilePage({ params }) {
  const { id } = params;

  let profile;
  try {
    profile = await db.query("SELECT * FROM clerk_users WHERE id = $1", [id]);
  } catch (error) {
    console.error(error);
    notFound();
  }

  if (profile.rows.length === 0) {
    console.error(`${id} not found.`);
    notFound();
  }

  const userProfile = profile.rows[0];

  let posts;
  try {
    posts = await db.query(`SELECT * FROM posts WHERE clerk_id = $1`, [
      userProfile.clerk_id,
    ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-10">
      <h2 className="text-5xl font-bold text-green-400 mb-12 text-center">
        {userProfile.username}&apos;s Profile
      </h2>

      <div className="w-full max-w-2xl bg-gray-800 border border-green-400 p-8 rounded-lg shadow-lg mb-12">
        <h3 className="text-3xl font-semibold text-green-400 mb-6">
          Profile Information
        </h3>
        <p className="text-lg text-gray-300">
          <span className="font-semibold text-white">Bio:</span>{" "}
          {userProfile.bio}
        </p>
      </div>

      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold text-green-400 mb-6">
          Posts by {userProfile.username}
        </h3>
        {posts.rows.length === 0 ? (
          <p className="text-lg text-gray-300">No posts yet</p>
        ) : (
          posts.rows.map((post) => (
            <div
              key={post.id}
              className="bg-gray-700 border border-gray-600 p-6 mb-4 rounded-lg shadow"
            >
              <h1 className="text-2xl font-semibold text-green-400">
                {post.title}
              </h1>
              <p className="text-gray-300 mt-2">{post.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
