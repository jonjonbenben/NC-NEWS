import React from "react";
import { getArticles, getTopics, getArticlesSortedVotes } from "../utils/api";
import { Link } from "@reach/router";

class Homepage extends React.Component {
  state = {
    articles: [],
    topics: [],
    isLoading: true,
  };

  componentDidMount() {
    getArticles().then((articles) => {
      this.setState({ articles: articles });
    });
    getTopics().then((topics) => {
      this.setState({ topics: topics, isLoading: false });
    });
  }

  render() {
    return this.state.isLoading ? (
      <div>
        <h2>Page is loading</h2>
      </div>
    ) : (
      <div className="grid">
        <div className="topics">
          <h2>Filter By</h2>
          {this.state.topics.map((topic) => {
            return (
              <h3 className="topic">
                <Link to={`/topics/${topic.slug}`} className="text">
                  {topic.slug}
                </Link>
              </h3>
            );
          })}
        </div>
        <ul className="articles">
          <h2>Articles</h2>
          <p>
            Below you can find a list of all our articles, click the article to
            read it, upvote it, and comment!
          </p>
          <p>
            You can also sort articles by the topics on the left by clicking on
            them.
          </p>
          {this.state.articles.map((article) => {
            return (
              <li key={article.article_id} className="listItem">
                <Link
                  to={`/articles/${article.article_id}`}
                  className="article"
                >
                  {article.title}
                </Link>
                <p className="author">
                  {" "}
                  by {article.author}, Votes: {article.votes}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Homepage;
