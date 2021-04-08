import React from "react";
import { updateArticleVotes } from "../utils/api";

class UpdateVotes extends React.Component {
  state = { voteChange: 0 };

  updateVotes = (article_id, increment) => {
    updateArticleVotes(article_id, increment).then(() => {
      this.setState((currState) => {
        return {
          voteChange: currState.voteChange + increment,
        };
      });
    });
  };

  render() {
    const article_id = this.props.article_id;
    const votes = this.props.votes;
    return (
      <div>
        <button
          className="plus"
          onClick={() => this.updateVotes(article_id, 1)}
        >
          +
        </button>
        <p>{votes + this.state.voteChange} Votes</p>
        <button
          className="minus"
          onClick={() => this.updateVotes(article_id, -1)}
        >
          -
        </button>
      </div>
    );
  }
}

export default UpdateVotes;
