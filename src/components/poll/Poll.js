import * as React from "react";
import { pollsRef } from "../../firebase";
import PropTypes from "prop-types";

export default class Poll extends React.Component {
  state = {
    question: "",
    alternatives: []
  };

  componentDidMount() {
    pollsRef.child(this.props.pollId).on("value", snapshot => {
      const data = snapshot.val();
      console.log(data);
      this.setState(data);
    });
  }
  render() {
    const { question, alternatives } = this.state;
    return (
      <div>
        Poll
        <div>{question}</div>
        {alternatives.map((x, i) => (
          <div key={i}>{x}</div>
        ))}
      </div>
    );
  }
}

Poll.propTypes = {
  pollId: PropTypes.string // The FirebaseID for a specific Poll
};
