import { getArticlesById, getCommentsByArticle } from "../utils/api";
import React from "react";

class Article extends React.Component {
  state = {
    article: {},
    isLoading: true,
    comments: [],
  };

  componentDidMount() {
    getCommentsByArticle(this.props.article_id).then((comments) => {
      this.setState({ comments: comments });
    });
    getArticlesById(this.props.article_id).then((article) => {
      this.setState({ article: article, isLoading: false });
    });
  }

  render() {
    return this.state.isLoading ? (
      <div>
        <h2>Page is loading</h2>
      </div>
    ) : (
      <>
        <h2>{this.state.article.title}</h2>
        <p className="author"> By {this.state.article.author}</p>
        <p>{this.state.article.body}</p>
        <button>Upvote</button>
        <button>Downvote</button>
        <p>Total Votes: {this.state.article.votes}</p>
        {this.state.comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <p>{comment.body}</p>
              <p className="author">by {comment.author}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default Article;
//implement the upvote and downvote functionality on the vote total and also
//make a request to the backend that actually upvotes the votes - or maybe
//you only need to make the patch request and itll do it automatically
//implement functionality to add a comment
