import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between bg-orange-200 p-4 mt-0">
      <div className="text-sm text-gray-700">
        © {new Date().getFullYear()} Bugnexus. All rights reserved.
      </div>
      <div className="flex space-x-4">
        <Link href="/about" className="text-purple-500 hover:underline">
          About
        </Link>
        <Link href="/" className="text-purple-500 hover:underline">
          Home
        </Link>
        <Link href="/Posts" className="text-purple-500 hover:underline">
          Posts
        </Link>
      </div>
    </footer>
  );
}
