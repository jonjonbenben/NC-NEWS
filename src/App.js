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
//how to add class to submit button to style it and how to change its text
//how to conditionally render the delete button? can i use an if or does it ahve to be ternary
//why are there two css files?

//sort out the header message not switching on return to homepage
//topic and homepage are very simialr components in terms of code
//HAvent implemented errors yet
//havent implemented the voting while offline feature
//comment doesnt add unless you reload the page
//delete comment doesnt work unless reload
//filter by text goes massive in phone mode
