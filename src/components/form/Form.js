import React from "react";
import "../../reset.css";
import "../../App.css";
import "../../utils.css";

function Form({ inputField }) {
  return (
    <div className="flex height-base textcolor-darkgray bg-lightgray narrow padding-base">
      <div>1.</div>
      {inputField}
      <div className="icon-selected"></div>
    </div>
  );
}

export default Form;
