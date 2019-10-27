import React from "react";
import "../../reset.css";
import "../../app.css";
import "../../utils.css";

function Button() {
	return (
		<button className="flex height-base textcolor-white bg-primary narrow padding-base">
			<div>1.</div>
			<div>Button Label</div>
			<div className="icon-selected"></div>
		</button>
	);
}

export default Button;
