import React, { Fragment } from "react";
import "./ListWaiter.scss";
import WaiterOption from "../waiter/Waiter"


function WaiterPersons(props) {
    return (
        <Fragment>
            <button className="Waiter-name">{props.person}</button>
        </Fragment>
    );
}

export default WaiterPersons;
