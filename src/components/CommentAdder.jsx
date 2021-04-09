import React from "react";
import { addComment, getCommentsByArticle } from "../utils/api";

class CommentAdder extends React.Component {
  state = { comment: "", comments: [] };

  handleChange = (event) => {
    console.log(event);
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    addComment(this.props.article_id, this.state.comment).then(() => {
      getCommentsByArticle(this.props.article_id).then((comments) => {
        this.props.updateComments(comments);
      });
    });
  };

  render() {
    const comment = this.state.comment;
    return (
      <>
        <h2> Post a Comment</h2>
        <form onSubmit={this.handleSubmit} className="commentAdder">
          <label htmlFor="comment"></label>
          <input
            type="text"
            name="comment"
            onChange={this.handleChange}
            value={comment}
            className="inputBox"
          ></input>
          <button className="plus">Submit</button>
        </form>
      </>
    );
  }
}

export default CommentAdder;
