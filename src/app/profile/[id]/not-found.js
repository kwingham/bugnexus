import Link from "next/link";

export const metadata = {
  title: "BugNexus | Oops!!",
  description:
    "BugNexus - the place for beginners to ask for help with their code",
  icons: {
    icon: "/favicon.ico",
  },
};

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
        className="px-6 py-3 bg-green-400 text-gray-900 font-semibold rounded hover:bg-green-500 transition-colors"
      >
        Return to BugNexus Posts
      </Link>
    </div>
  );
}
