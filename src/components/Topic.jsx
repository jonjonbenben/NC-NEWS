import React from "react";
import { Link } from "@reach/router";
import { getTopics, getArticlesByTopic } from "../utils/api";

class Topic extends React.Component {
  state = {
    articles: [],
    topics: [],
    topic: "",
    isLoading: true,
  };

  componentDidMount() {
    getArticlesByTopic(this.props.slug).then((articles) => {
      this.setState({ articles: articles, topic: this.props.slug });
    });
    getTopics().then((topics) => {
      this.setState({ topics: topics, isLoading: false });
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.slug !== prevProps.slug) {
      getArticlesByTopic(this.props.slug).then((articles) => {
        this.setState({ articles: articles, topic: this.props.slug });
      });
    }
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
          <h2>Articles about {this.state.topic}</h2>
          {this.state.articles.map((article) => {
            return (
              <li key={article.article_id} className="listItem">
                <Link
                  to={`/articles/${article.article_id}`}
                  className="article"
                >
                  {article.title}
                </Link>
                <p className="author"> by {article.author}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Topic;
