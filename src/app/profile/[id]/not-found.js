import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      <h1>User Profile Not Found</h1>
      <p>Sorry, the user profile you are trying to view does not exist</p>

      <Link href="/posts">Return to Bugnexus Posts</Link>
    </div>
  );
}
