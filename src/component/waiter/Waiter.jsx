import React from "react";
import WoodLogo from "../woodLogo/WoodLogo"
import "./Waiter.scss";


function WaiterOption(props) {
    return (
        <div className="View-waiters">
            <body className="Options-waiters">
                <WoodLogo />
                <div className="Names-Waiters">
                    <div>
                        <button className="Waiter"> Nombre </button>
                    </div>
                </div>
            </body>
        </div >
    );
}

export default WaiterOption;
