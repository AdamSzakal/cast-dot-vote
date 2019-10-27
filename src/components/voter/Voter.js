import React from "react";
import CreatePoll from "../createPoll/CreatePoll";
import Poll from "../poll/Poll";

function Voter() {
  // Should be true/false depending on if we're viewing or creating a poll
  const activePoll = false;
  if (activePoll) {
    return <Poll pollId={"-LsBzDnQ6b_MmTAHV1XQ"} />;
  }
  return <CreatePoll />;
}

export default Voter;
