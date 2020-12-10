import React from "react";
import { db } from "../../firebase";
import "./ModalWindow.scss";
import OrderTable from "../orderTable/OrderTable"

const ModalWindowWaiter = (props, { show }) => {
    console.log(props);
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const waiterModal = () => {

    }
    /*  { handleClose, show, waiterName, } */

    const sendOrder = (orderList) => {
        db.collection("orderCollection").add(orderList)
        this.state.orderList = [];
    }

    return (
        <div className="Window-container">
            <div className="AllspaceModalContainer">
                <div className="Modal-container">
                    <div className="Waiter-name-modal">
                        <p>Mesero: {props.waiterName}</p>
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
                        {
                            props.orderList.map(item => (
                                <OrderTable key={item.product} product={item.product} price={item.price} quantity={item.quantity} />))
                        }
                    </div>
                    <button>Click</button>
                    <button onClick={() => this.sendOrder({ orderList: this.state.orderList })}>Click</button>
                </div>
            </div>
        </div>

    )
}
export default ModalWindowWaiter;