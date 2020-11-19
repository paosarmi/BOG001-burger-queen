import React from "react";
import "./ModalWindow.scss";

const ModalWindowWaiter = () => {

    const waiterModal = () => {
        console.log("ventana modal")
    }

    return (
        <div className="WindowContainer">
            <div className="AllspaceModalContainer">
                <div className="ModalContainer">
                    <p>Mesero: WaiterName</p>
                </div>
                <button>Click</button>
                <button>Click</button>
            </div>
        </div>
    )
}
export default ModalWindowWaiter;