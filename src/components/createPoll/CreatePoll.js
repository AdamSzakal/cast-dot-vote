import React, { useState, useEffect } from "react";
import { submitPoll } from "../../firebase";
import Button from "../button/Button";
import Form from "../form/Form";

function CreatePoll() {
  const [alternatives, setAlternatives] = useState(["Jag", "Du"]);
  const [question, setQuestion] = useState();
  const [pollId, setPollId] = useState();

  function handleInputChange(event) {
    const value = event.target.value;
    setQuestion(value);
  }

  function handlePollSubmit(value) {
    setPollId(value);
  }

  useEffect(() => {
    console.log("Poll id change. Perhaps we should navigate?", pollId);
  }, [pollId]);

  return (
    <div>
      <Form
        inputField={
          <input
            type="text"
            value={question}
            onChange={handleInputChange}
            placeholder="What would you like for dinner today?"
          />
        }
      ></Form>

      <Button
        onClick={submitPoll(
          {
            question,
            alternatives
          },
          handlePollSubmit
        )}
      ></Button>
      <div>Poll ID is: {pollId}</div>
    </div>
  );
}

export default CreatePoll;
