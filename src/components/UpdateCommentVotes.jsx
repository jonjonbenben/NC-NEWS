import React from "react";
import { updateCommentVotes } from "../utils/api";

class UpdateCommentVotes extends React.Component {
  state = { voteChange: 0 };

  updateVotes = (comment_id, increment) => {
    updateCommentVotes(comment_id, increment).then(() => {
      this.setState((currState) => {
        return {
          voteChange: currState.voteChange + increment,
        };
      });
    });
  };

  render() {
    const comment_id = this.props.comment_id;
    const votes = this.props.votes;
    return (
      <div className="votes">
        <button
          className="plus"
          onClick={() => this.updateVotes(comment_id, 1)}
        >
          +
        </button>
        <p>{votes + this.state.voteChange} Votes</p>
        <button
          className="minus"
          onClick={() => this.updateVotes(comment_id, -1)}
        >
          -
        </button>
      </div>
    );
  }
}

export default UpdateCommentVotes;
