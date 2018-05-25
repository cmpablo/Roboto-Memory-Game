import React from "react";
import "../styles/RobotImage.css";

const RobotImage = props => (
    <div className="img-container">
        <div className='card' id='robot'>
            <img alt={props.alt} src={require("../images/" + props.image)} onClick={props.clickImage} />
        </div>
    </div>
);

export default RobotImage;
