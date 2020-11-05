import React, { Fragment } from "react";
import "./ChefButton.scss";


function PersonChef(props) {
    return (
        <Fragment>
            <button className="Chef-name">{props.person}</button>
        </Fragment>
    );
}

export default PersonChef;