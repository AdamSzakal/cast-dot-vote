import React from "react";
import CreatePoll from "../createPoll/CreatePoll";
import ShowPoll from "../showPoll/ShowPoll";

function Voter() {
  // Should be true/false depending on if we're viewing or creating a poll
  const activePoll = false;
  if (activePoll) {
    return <ShowPoll />;
  }
  return <CreatePoll />;
}

export default Voter;
