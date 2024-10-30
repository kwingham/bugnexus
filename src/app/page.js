export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <main className="flex flex-col items-center w-full flex-grow p-4 space-y-4">
        <div className="bg-green-100 w-full max-w-3xl p-8 flex flex-col items-center justify-center rounded text-center">
          <h2 className="text-2xl font-semibold mb-4">Welcome to BugNexus</h2>
          <p className="text-lg text-gray-700">
            BugNexus is a collaborative learning platform designed to help new
            developers tackle coding challenges by connecting them with a
            supportive community. Whether youre stuck on a tricky bug or need
            guidance on best practices, BugNexus is your hub for learning,
            sharing knowledge, and finding answers. Join us and grow your skills
            alongside fellow learners and experienced developers!
          </p>
        </div>
        <div className="w-full max-w-3xl">
          <a
            href="/posts"
            className="block bg-green-500 text-white text-center py-4 rounded text-xl"
          >
            View Post
          </a>
        </div>
      </main>
    </div>
  );
}
