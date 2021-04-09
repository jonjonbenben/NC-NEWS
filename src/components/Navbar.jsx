import { Link } from "@reach/router";

export const Navbar = (props) => {
  let navBarMessage = "Welcome to JBook";
  let messageClassName = "welcomeMessage";
  if (props.articleName !== "") {
    navBarMessage = props.articleName;
    messageClassName = "articleMessage";
  }
  return (
    <nav>
      <div className="buttons">
        <Link className="nav-item" to="/">
          Home
        </Link>
        <p>Logged in as {props.user}</p>
      </div>
      <h1 className={messageClassName}>{navBarMessage}</h1>
    </nav>
  );
};
