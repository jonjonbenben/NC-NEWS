import {
  getArticlesById,
  getCommentsByArticle,
  deleteComment,
} from "../utils/api";
import UpdateVotes from "./UpdateVotes";
import CommentAdder from "./CommentAdder";
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
      this.props.getArticleName(article.title);
    });
  }
  invokeDeleteComment(comment_id, author) {
    if (this.props.user === author) {
      deleteComment(comment_id).then(() => {
        getCommentsByArticle(this.props.article_id).then((comments) => {
          this.setState({ comments: comments });
        });
      });
    }
  }
  updateComments = (comments) => {
    this.setState({ comments: comments });
  };
  render() {
    return this.state.isLoading ? (
      <div>
        <h2>Page is loading</h2>
      </div>
    ) : (
      <>
        <p className="author"> By {this.state.article.author}</p>
        <p className="articleBody">{this.state.article.body}</p>
        <UpdateVotes
          article_id={this.state.article.article_id}
          votes={this.state.article.votes}
          for="articles"
        />
        <hr></hr>
        <CommentAdder
          updateComments={this.updateComments}
          article_id={this.state.article.article_id}
        />
        <hr></hr>
        {this.state.comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <p className="commentBody">
                {comment.body}{" "}
                <button
                  className="minus"
                  onClick={() =>
                    this.invokeDeleteComment(comment.comment_id, comment.author)
                  }
                >
                  Delete
                </button>
              </p>
              <UpdateVotes
                comment_id={comment.comment_id}
                votes={comment.votes}
                for="comments"
              />
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
