import React from "react";
import { getArticles, getTopics, getArticlesSorted } from "../utils/api";
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
  sortByVotes = () => {
    getArticlesSorted("votes").then((articles) => {
      this.setState({ articles: articles });
    });
  };

  sortByCreatedAt = () => {
    getArticlesSorted("created_at").then((articles) => {
      this.setState({ articles: articles });
    });
  };

  sortByCommentCount = () => {
    getArticlesSorted("comment_count").then((articles) => {
      this.setState({ articles: articles });
    });
  };

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
              <p className="topic">
                <Link to={`/topics/${topic.slug}`} className="text">
                  {topic.slug}
                </Link>
              </p>
            );
          })}
          <div className="sortBy">
            <h2>Sort By</h2>
            <p className="topic">
              <button className="button" onClick={() => this.sortByVotes()}>
                Votes
              </button>
            </p>
            <p className="topic">
              <button className="button" onClick={() => this.sortByCreatedAt()}>
                Date Created
              </button>
            </p>
            <p className="topic">
              <button
                className="button"
                onClick={() => this.sortByCommentCount()}
              >
                Comment Number
              </button>
            </p>
          </div>
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
                <p className="authorHomepage">
                  {" "}
                  by {article.author}, Votes: {article.votes}, Comments:{" "}
                  {article.comment_count}
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
