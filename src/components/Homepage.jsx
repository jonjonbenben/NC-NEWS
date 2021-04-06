import React from "react";
import { getArticles } from "../utils/api";

class Homepage extends React.Component {
  state = {
    articles: [],
    topics: [],
  };

  componentDidMount() {
    getArticles().then((articles) => {
      this.setState({ articles: articles });
      console.log(this.state);
    });
  }

  render() {
    return <div>Homepage here</div>;
  }
}

export default Homepage;
