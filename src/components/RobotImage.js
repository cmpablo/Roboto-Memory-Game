import React from "react";
import "../styles/RobotImage.css";

const RobotImage = props => (
    <div className="img-container">
        <img alt={props.alt} src={require("../images/" + props.image)} />
    </div>
);

export default RobotImage;
