import "./App.css";
import { Navbar } from "./components/Navbar";
import Homepage from "./components/Homepage";
import { Router } from "@reach/router";
import Article from "./components/Article";
import React from "react";
import Topic from "./components/Topic";

class App extends React.Component {
  state = { articleName: "", user: "tickle122" };

  getArticleName = (articleName) => {
    this.setState({ articleName: articleName });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Navbar articleName={this.state.articleName} user={this.state.user} />
        <Router>
          <Homepage path="/" />
          <Topic path="/topics/:slug" />
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

//add sort by homepage changes to the filterby page

//sort out the header message not switching no return to homepage
//add a way to filter the articles
//topic and homepage are very simialr components
//HAvent implemented errors yet
//havent implemented the voting while offline feature
//comment doesnt add unless you reload the page
//delete comment doesnt work unless reload
