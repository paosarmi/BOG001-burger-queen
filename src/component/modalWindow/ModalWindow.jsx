import React from "react";
import { db } from "../../firebase";
import "./ModalWindow.scss";
import OrderTable from "../orderTable/OrderTable"

const ModalWindowWaiter = (props, { show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const sendOrder = (orderList) => {
        db.collection("orderCollection").add(orderList)
        orderList = [];
    }

    const trashButton = false;

    /*  const waiterModal = () => {
 
     } */
    /*  { handleClose, show, waiterName, } */


    return (
        <div className="Window-container">
            <div className="AllspaceModalContainer">
                <div className="Modal-container">
                    <div className="Waiter-name-modal">
                        <p>Mesero: {props.waiterName}</p>
                    </div>
                    <div className="Client">
                        <p> Nombre del cliente: </p>
                        <input type="text" className="Name-client" />
                    </div>
                    <div className="Order">
                        <p>Resumen de pedido</p>
                    </div>
                    <div className="Order-detail-modal">
                        {
                            props.orderList.map(item => (
                                <OrderTable key={item.product} product={item.product} price={item.price} quantity={item.quantity} trash={trashButton} />))
                        }
                    </div>
                    <div className="Buttons-containers">
                        <button onClick={showHideClassName}>Cancelar</button>
                        <button onClick={sendOrder}>Confirmar</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ModalWindowWaiter;