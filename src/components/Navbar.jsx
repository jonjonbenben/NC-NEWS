import { Link } from "@reach/router";

export const Navbar = (props) => {
  return (
    <nav>
      <div className="buttons">
        <Link className="nav-item" to="/">
          Home
        </Link>
      </div>
      <h1 className="welcomeMessage">{props.welcomeMessage}</h1>
    </nav>
  );
};
