import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-6xl font-bold text-green-400 mb-6 text-center">
        404
      </h1>
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-300 mb-8 text-center">
        Sorry, the page you are looking for could not be found.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
      >
        Return to BugNexus Home
      </Link>
    </div>
  );
}
