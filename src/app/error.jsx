"use client";

import Link from "next/link";
import { useEffect } from "react";

export const metadata = {
  title: "BugNexus | Something has gone wrong!",
  description:
    "BugNexus - the place for beginners to ask for help with their code",
  icons: {
    icon: "/favicon.ico",
  },
};

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
        className="px-6 py-3 bg-green-400 text-gray-900 font-semibold rounded hover:bg-green-500 transition-colors"
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
