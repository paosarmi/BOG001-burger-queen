import React from "react";
import WoodLogo from "../woodLogo/WoodLogo"
import BackButton from "../backButton/BackButton";
import TableState from "./state.png"
import "./OrderState.scss";

function OrderState() {
    return (
        <div className="Waiters">
            <div className="Intro-body">
                <div className="Order-state">
                    <WoodLogo />
                    <div>
                        <BackButton path="/order" />
                    </div>
                    <div className="State-container">
                        <div className="Table-container">
                            <img src={TableState} alt="Tabla de pedidos" className="Table-order" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderState;