import React from "react";
import { updateVotes } from "../utils/api";

class UpdateVotes extends React.Component {
  state = { voteChange: 0 };
  thingWeVoteOn = this.props.for;

  updateVotes = (id, increment) => {
    updateVotes(id, increment, this.thingWeVoteOn).then(() => {
      this.setState((currState) => {
        return {
          voteChange: currState.voteChange + increment,
        };
      });
    });
  };

  render() {
    let id = "";
    if (this.thingWeVoteOn === "articles") {
      id = this.props.article_id;
    } else if (this.thingWeVoteOn === "comments") {
      id = this.props.comment_id;
    }
    const votes = this.props.votes;
    return (
      <div className="votes">
        <button className="plus" onClick={() => this.updateVotes(id, 1)}>
          +
        </button>
        <p>{votes + this.state.voteChange} Votes</p>
        <button className="minus" onClick={() => this.updateVotes(id, -1)}>
          -
        </button>
      </div>
    );
  }
}

export default UpdateVotes;
