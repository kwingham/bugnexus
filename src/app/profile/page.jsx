import { connect } from "@/utilities/db";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
export default async function ProfilePage() {
  const { userId } = await auth();

  const db = connect();

  let profile = null;

  if (userId) {
    const result = await db.query(
      `SELECT * FROM clerk_users WHERE clerk_id = $1`,
      [userId]
    );

    if (result.rows.length > 0) {
      profile = result.rows[0];
    }
  }

  const posts = profile
    ? await db.query(`SELECT * FROM posts WHERE clerk_id = $1`, [
        profile.clerk_id,
      ])
    : [];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-10">
      <h2 className="text-5xl font-bold text-green-400 mb-12 text-center">
        Profile
      </h2>

      <SignedIn>
        <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-3xl font-semibold text-green-400 mb-6">
            Your Profile
          </h3>
          {profile ? (
            <div className="border border-green-400 p-6 rounded-lg bg-gray-700">
              <Link
                href="/profile/updateProfile"
                className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
              >
                Update Profile
              </Link>
              <div className="mt-4">
                <p className="text-lg text-gray-300 mb-2">
                  <span className="font-semibold text-white">Username:</span>{" "}
                  {profile.username}
                </p>
                <p className="text-lg text-gray-300 mb-2">
                  <span className="font-semibold text-white">Bio:</span>{" "}
                  {profile.bio}
                </p>
              </div>
            </div>
          ) : (
            <div className="border border-red-500 p-6 rounded-lg bg-gray-700">
              <Link
                href="/profile/updateProfile"
                className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
              >
                Update Profile
              </Link>
              <p className="text-lg text-gray-300">
                <span className="text-red-400 font-semibold">
                  No profile found. Please update your profile.
                </span>
              </p>
            </div>
          )}
        </div>

        <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-green-400 mb-6">
            Posts by {profile?.username || "User"}
          </h3>
          {posts.length === 0 ? (
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
      </SignedIn>

      <SignedOut>
        <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-semibold text-green-400 mb-6">
            Profile
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Please sign in to view or update your profile.
          </p>
          <SignInButton className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors" />
        </div>
      </SignedOut>
    </div>
  );
}
