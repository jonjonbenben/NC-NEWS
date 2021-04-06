import { Link } from "@reach/router";

export const Navbar = () => {
  return (
    <nav>
      <Link className="nav-item" to="/">
        Home
      </Link>
    </nav>
  );
};
