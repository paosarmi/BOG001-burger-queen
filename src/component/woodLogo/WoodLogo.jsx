import React from "react";
import wood from "./madero.png";
import "./WoodLogo.scss";

function WoodLogo(props) {
    console.log(props.hasAnimation)
    return (
        <img src={wood} alt="Loguito" className={`Logo-header ${props.hasAnimation ? "logoAnimation" : ""}`} />
    )
}
export default WoodLogo;
