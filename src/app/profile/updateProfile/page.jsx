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
//maximum call stack size exceeded at resolveErrorDev to be fixed
export default async function UpdateProfilePage() {
  // Get user with Clerk
  const user = await auth();

  // Log the full auth object for debugging
  console.log("Auth object:", user);

  const { userId } = user;
  const db = connect();

  // Get user profile from db
  const profile = await db.query(
    `SELECT * FROM clerk_users WHERE clerk_id = $1`,
    [userId]
  );

  // Check to see if user has a profile
  const existingProfile = profile.rows[0] || {};

  async function handleUpdateProfile(formData) {
    "use server";

    const username = formData.get("username")?.trim();
    const bio = formData.get("bio")?.trim();

    if (!username) {
      console.error("Username is required.");
      return;
    }

    try {
      const profiles = await db.query(
        `SELECT * FROM clerk_users WHERE clerk_id = $1`,
        [userId]
      );

      if (profiles.rowCount === 0) {
        // If no profile, add one
        await db.query(
          `INSERT INTO clerk_users (clerk_id, username, bio) VALUES ($1, $2, $3)`,
          [userId, username, bio]
        );
      } else {
        // If a profile exists, update it
        await db.query(
          `UPDATE clerk_users SET username = $1, bio = $2 WHERE clerk_id = $3`,
          [username, bio, userId]
        );
      }

      // Revalidate the profile page and redirect after updating the profile
      revalidatePath(`/profile`);
      redirect(`/profile`);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

  return (
    <div className="flex flex-col justify-evenly items-center min-h-screen p-10">
      <h2 className="text-4xl mb-10">
        <span className="title">Update Profile</span>
      </h2>

      <SignedIn>
        <div className="w-full max-w-2xl">
          <form
            action={handleUpdateProfile}
            className="mb-10 border p-4 rounded"
          >
            <div className="mb-4">
              <label className="block text-xl mb-2" htmlFor="username">
                <span className="title">Username</span>
              </label>
              <input
                className="w-full border p-2 rounded text-black placeholder-gray-500"
                type="text"
                name="username"
                placeholder="Enter a Username"
                defaultValue={existingProfile.username || ""}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-xl mb-2" htmlFor="bio">
                <span className="title">Biography</span>
              </label>
              <textarea
                className="w-full border p-2 rounded text-black placeholder-gray-500"
                name="bio"
                placeholder="Enter a Biography"
                defaultValue={existingProfile.bio || ""}
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Update Profile
            </button>
          </form>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="w-full max-w-2xl">
          <p className="text-center text-xl mb-4">
            <span className="title">
              You must be signed in to update your profile.
            </span>
          </p>
          <div className="text-center mt-4">
            <SignInButton className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" />
          </div>
        </div>
      </SignedOut>
    </div>
  );
}
