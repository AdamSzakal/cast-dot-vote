import React, { useEffect, useReducer, useState } from "react";
import { submitPoll } from "../../firebase";
import Button from "../button/Button";
import Form from "../form/Form";

function CreatePoll() {
  const [alternatives, alternativesDispatch] = useReducer(alternativeReducer, [
    ""
  ]);
  const [question, setQuestion] = useState("");
  const [pollId, setPollId] = useState();

  function handleQuestionChange(event) {
    const value = event.target.value;
    setQuestion(value);
  }

  function handlePollSubmit(value) {
    setPollId(value);
  }

  function handleAlternativeChange(alternativeKey) {
    return event => {
      alternativesDispatch({
        type: "UPDATE",
        key: alternativeKey,
        value: event.target.value
      });
    };
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
            onChange={handleQuestionChange}
            placeholder="What would you like for dinner today?"
          />
        }
      />

      {!!question &&
        alternatives.map((alternative, key) => {
          return (
            <Form
              key={key}
              inputField={
                <input
                  type="text"
                  value={alternative}
                  onChange={handleAlternativeChange(key)}
                  placeholder="Question"
                />
              }
            />
          );
        })}

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

function alternativeReducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      const isEditingLastItem = action.key === state.length - 1;
      const newState = isEditingLastItem ? [...state, ""] : [...state];
      newState[action.key] = action.value;
      return newState;
    default:
      return [...state];
  }
}

export default CreatePoll;
