import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <p>Sorry the page you are looking for has not been found</p>
      <Link href="/">Return To Bugnexus Home</Link>
    </div>
  );
}
