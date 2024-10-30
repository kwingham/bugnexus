import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white">
      <main className="flex flex-col items-center w-full flex-grow p-10 space-y-8">
        <div className="bg-gray-800 w-full max-w-3xl p-8 flex flex-col items-center justify-center rounded-lg text-center shadow-lg border border-gray-700">
          <h2 className="text-5xl font-bold text-green-400 mb-6">
            Welcome to BugNexus
          </h2>
          <p className="text-lg text-gray-300">
            BugNexus is a collaborative learning platform designed to help new
            developers tackle coding challenges by connecting them with a
            supportive community. Whether you&apos;re stuck on a tricky bug or
            need guidance on best practices, BugNexus is your hub for learning,
            sharing knowledge, and finding answers. Join us and grow your skills
            alongside fellow learners and experienced developers!
          </p>
        </div>
        <div className="w-full max-w-3xl">
          <Link
            href="/posts"
            className="block bg-green-400 text-gray-900 text-center py-4 rounded text-xl font-semibold hover:bg-green-500 transition-colors"
          >
            View Posts
          </Link>
        </div>
      </main>
    </div>
  );
}
