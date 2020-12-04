import React from "react";
import { db } from "../../firebase";
import "./ModalWindow.scss";

const ModalWindowWaiter = ({ handleClose, show }) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const waiterModal = () => {
        console.log("ventana modal")
    }

    const sendOrder = (order) => {
        db.collection("orderCollection").add(order)
        this.state.orderList = [];
    }

    return (
        <div className="Window-container">
            <div className="AllspaceModalContainer">
                <div className="Modal-container">
                    <div className="Waiter-name-modal">
                        <p>Mesero: WaiterName</p>
                    </div>
                    <div className="Client-name">
                        <p>
                            Nombre del cliente:
                        </p>
                        <p>_____________________</p>
                    </div>
                    <div className="Order-detail">
                        <p>
                            Resumen de pedido
                        </p>
                    </div>
                    <button onClick={() => this.sendOrder({ orderList: this.state.orderList })} >Click</button>
                    <button>Click</button>
                </div>
            </div>
        </div>

    )
}
export default ModalWindowWaiter;