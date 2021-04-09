import { Link } from "@reach/router";
import React from "react";

const Navbar = (props) => {
  let className = "welcomeMessage";
  if (props.articleName !== "Welcome to JBook") {
    className = "articleMessage";
  }
  return (
    <nav>
      <div className="buttons">
        <Link className="nav-item" to="/">
          Home
        </Link>
        <p>Logged in as {props.user}</p>
      </div>
      <h1 className={className}>{props.articleName}</h1>
    </nav>
  );
};

export default Navbar;
