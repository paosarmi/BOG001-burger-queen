import React from 'react'
import "./OrderDetail.scss";

function OrderDetail() {
    return (
        <div className="Order-detail-container">
            <div className="Order-products-container">
                <p>Cafe américano    1    $5</p>
            </div>
            <div className="Order-total-container">
                <p>Total    5</p>
            </div>
            <div className="Submit-container">
                <button className="Submit-order">Enviar a cocina</button>
            </div >
        </div >
    )
}
export default OrderDetail;