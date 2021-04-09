import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import { Router } from "@reach/router";
import Article from "./components/Article";
import React from "react";

class App extends React.Component {
  state = { articleName: "Welcome to JBook", user: "tickle122" };

  getArticleName = (articleName) => {
    this.setState({ articleName: articleName });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Navbar articleName={this.state.articleName} user={this.state.user} />
        <Router>
          <Homepage path="/" getArticleName={this.getArticleName} />
          <Homepage path="/topics/:slug" getArticleName={this.getArticleName} />
          <Article
            path="/articles/:article_id"
            getArticleName={this.getArticleName}
            user={this.state.user}
          />
        </Router>
      </div>
    );
  }
}

export default App;

//how to conditionally render the delete button? can i use an if or does it ahve to be ternary

//sort out the header message not switching on return to homepage
//HAvent implemented errors yet
//havent implemented the voting while offline feature
