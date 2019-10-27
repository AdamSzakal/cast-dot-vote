import React from "react";
import { submitPoll } from "../../firebase";

function Button() {
  return (
    <button
      className="Button"
      onSubmit={submitPoll({
        question: "Jag eller du?",
        alternatives: ["Jag", "Du"]
      })}
    >
      Knapp
    </button>
  );
}

export default Button;
