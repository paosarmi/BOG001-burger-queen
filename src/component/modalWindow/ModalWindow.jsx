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
        //this.state.orderList = [];
    }

    return (
        <div className="WindowContainer">
            <div className="AllspaceModalContainer">
                <div className="ModalContainer">
                    <div>
                        <p>Mesero: WaiterName</p>
                    </div>
                    <div>
                        <p>
                            Nombre del cliente:
                    </p>
                        <p>_____________________</p>
                    </div>
                    <div>
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