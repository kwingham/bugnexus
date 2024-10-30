"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-10">
      <h2 className="text-4xl font-bold text-red-500 mb-6 text-center">
        Something went wrong!
      </h2>
      <p className="text-lg text-gray-300 mb-6 text-center">
        An unexpected error occurred. Please try again or return to the home
        page.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors mb-4"
      >
        Try Again
      </button>
      <Link
        href="/"
        className="px-6 py-3 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 transition-colors"
      >
        Return to BugNexus Home
      </Link>
    </div>
  );
}
