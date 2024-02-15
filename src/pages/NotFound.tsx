import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL and try again.</p>
      <p>
        Back to <Link to="/">Home</Link>
      </p>
    </section>
  );
}
