import React from 'react'
import "./OrderDetail.scss";

function OrderDetail() {
    console.log()
    return (
        <div className="Order-detail-container">
            <div className="Order-products-container">
                <p>Cafe américano    1    $5</p>
            </div>
            <div className="Order-total-container">
                <p>Total    5</p>
            </div>
        </div>
    )
}
export default OrderDetail;