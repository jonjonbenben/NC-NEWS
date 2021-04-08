import "./App.css";
import { Navbar } from "./components/Navbar";
import Homepage from "./components/Homepage";
import { Router } from "@reach/router";
import Article from "./components/Article";
import React from "react";
import Topic from "./components/Topic";

class App extends React.Component {
  state = { articleName: "" };

  getArticleName = (articleName) => {
    this.setState({ articleName: articleName });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Navbar articleName={this.state.articleName} />
        <Router>
          <Homepage path="/" />
          <Topic path="/topics/:slug" />
          <Article
            path="/articles/:article_id"
            getArticleName={this.getArticleName}
          />
        </Router>
      </div>
    );
  }
}

export default App;

//can do multiple navbars in router depensing on the path
//add a way to filter the articles
