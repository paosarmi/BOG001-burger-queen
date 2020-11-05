import React, { Fragment } from "react";
import "./ListWaiter.scss";



function WaiterPersons(props) {
    return (
        <Fragment>
            <button className="Waiter-name">{props.person}</button>
        </Fragment>
    );
}

export default WaiterPersons;
