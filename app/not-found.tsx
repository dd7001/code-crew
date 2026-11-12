import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <span className="not-found-code">404 / PAGE NOT FOUND</span>
        <h1>
          Lost in the <span>digital space?</span>
        </h1>
        <p>
          The page you are looking for may have moved,
          been removed, or never existed.
        </p>
        <Link href="/" className="button-primary">
          Return to homepage
        </Link>
      </div>
    </main>
  );
}
