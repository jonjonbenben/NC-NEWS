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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="comment">Post A Comment!</label>
        <input
          type="text"
          name="comment"
          onChange={this.handleChange}
          value={comment}
        ></input>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CommentAdder;
