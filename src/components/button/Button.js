import React from "react";

function Button({ onClick }) {
  return (
    <button
      className="Button flex height-base textcolor-white bg-primary narrow padding-base"
      onClick={onClick}
    >
      <div>1.</div>
      <div>Button Label</div>
      <div className="icon-selected"></div>
    </button>
  );
}

export default Button;
