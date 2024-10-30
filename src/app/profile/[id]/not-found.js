import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-5xl font-bold text-green-400 mb-6 text-center">
        User Profile Not Found
      </h1>
      <p className="text-lg text-gray-300 mb-8 text-center">
        Sorry, the user profile you are trying to view does not exist.
      </p>
      <Link
        href="/posts"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
      >
        Return to BugNexus Posts
      </Link>
    </div>
  );
}
