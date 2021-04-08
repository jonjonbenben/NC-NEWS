import React from "react";
import { addComment } from "../utils/api";

class CommentAdder extends React.Component {
  state = { comment: "" };

  handleChange = (event) => {
    console.log(event);
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    addComment(this.props.article_id, this.state.comment);
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
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default CommentAdder;
