import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { connect } from "@/utilities/db";

export const metadata = {
  title: "BugNexus | Update Profile",
  description:
    "BugNexus - the place for beginners to ask for help with their code",
  icons: {
    icon: "/favicon.ico",
  },
};
export default async function UpdateProfilePage() {
  const { userId } = await auth();

  const db = connect();
  const profile = await db.query(
    `SELECT * FROM clerk_users WHERE clerk_id = $1`,
    [userId]
  );

  const existingProfile = profile.rows[0] || {};

  async function handleUpdateProfile(formData) {
    "use server";

    const username = formData.get("username")?.trim();
    const bio = formData.get("bio")?.trim();

    if (!username) {
      console.error("Username is required.");
      return;
    }

    const db = connect();
    try {
      const profiles = await db.query(
        `SELECT * FROM clerk_users WHERE clerk_id = $1`,
        [userId]
      );

      if (profiles.rowCount === 0) {
        await db.query(
          `INSERT INTO clerk_users (clerk_id, username, bio) VALUES ($1, $2, $3)`,
          [userId, username, bio]
        );
      } else {
        await db.query(
          `UPDATE clerk_users SET username = $1, bio = $2 WHERE clerk_id = $3`,
          [username, bio, userId]
        );
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-10">
      <h2 className="text-5xl font-bold text-green-400 mb-12 text-center">
        Update Profile
      </h2>

      <SignedIn>
        <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
          <form action={handleUpdateProfile} className="space-y-6">
            <div>
              <label
                className="block text-2xl font-semibold text-green-400 mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full border border-gray-600 p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                name="username"
                placeholder="Enter a Username"
                defaultValue={existingProfile.username || ""}
                required
              />
            </div>

            <div>
              <label
                className="block text-2xl font-semibold text-green-400 mb-2"
                htmlFor="bio"
              >
                Biography
              </label>
              <textarea
                className="w-full border border-gray-600 p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                name="bio"
                placeholder="Enter a Biography"
                defaultValue={existingProfile.bio || ""}
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-400 text-gray-900 font-semibold rounded hover:bg-green-500 transition-colors"
            >
              Update Profile
            </button>
          </form>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <p className="text-2xl font-semibold text-green-400 mb-6">
            You must be signed in to update your profile.
          </p>
          <SignInButton className="px-4 py-2 bg-green-400 text-gray-900 font-semibold rounded hover:bg-green-500 transition-colors" />
        </div>
      </SignedOut>
    </div>
  );
}
