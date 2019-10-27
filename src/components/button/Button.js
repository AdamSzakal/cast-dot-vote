import React from "react";
import "../../reset.css";
import "../../app.css";
import "../../utils.css";
import { submitPoll } from "../../firebase";

function Button() {
	return (
		<button
			className="Button flex height-base textcolor-white bg-primary narrow padding-base"
			onSubmit={submitPoll({
				question: "Jag eller du?",
				alternatives: ["Jag", "Du"]
			})}
		>
			<div>1.</div>
			<div>Button Label</div>
			<div className="icon-selected"></div>
		</button>
	);
}

export default Button;
