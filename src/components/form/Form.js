import React from "react";
import "../../reset.css";
import "../../app.css";
import "../../utils.css";

function Form() {
	return (
		<div className="flex height-base textcolor-darkgray bg-lightgray narrow padding-base">
			<div>1.</div>
			<input type="text" placeholder="What to get for dinner today?"></input>
			<div className="icon-selected"></div>
		</div>
	);
}

export default Form;
