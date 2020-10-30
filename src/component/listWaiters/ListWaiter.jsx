import React from "react";
import "./ListWaiter.scss";
import WaiterOption from "../waiter/Waiter"


function WaiterPersons() {
    return (

        <div>
            <button className="Waiter">
                <WaiterOption person="Ramsay Snow" />
                <WaiterOption person="Ygritte Snow" />
                <WaiterOption person="John Snow" />
                <WaiterOption person="Gendry Baratheon" />
            </button>
        </div>
    );
}

export default WaiterPersons;
