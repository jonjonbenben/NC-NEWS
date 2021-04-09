import { Link } from "@reach/router";

export const Navbar = (props) => {
  let navBarMessage = "Welcome to JBook";
  if (props.articleName !== "") {
    navBarMessage = props.articleName;
  }
  return (
    <nav>
      <div className="buttons">
        <Link className="nav-item" to="/">
          Home
        </Link>
        <p>Logged in as {props.user}</p>
      </div>
      <h1 className="welcomeMessage">{navBarMessage}</h1>
    </nav>
  );
};
