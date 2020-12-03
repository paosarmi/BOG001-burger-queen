import React, { useState } from 'react';
import TrashBucket from "../trashBucket/TrashBucket"
import "./OrderTable.scss";
var ReactDOM = require('react-dom');

const OrderTable = ({ product, price, quantity, deleteToOrder }) => {
    const deleteChangeProduct = () => {
        deleteToOrder(product, price);
    }
    return (
        <div>
            {
                <div className="ItemTableContainer">
                    <div className="Product">
                        <p>{product}  </p>
                    </div>
                    <div className="Quantity">
                        <p>{quantity}</p>
                    </div>
                    <div className="Price">
                        <p>...${price}</p>
                    </div>
                    <div>
                        <TrashBucket onClick={this.setState.deleteChangeProduct} /* deleteToOrder={this.deleteToOrder} */ />
                    </div>
                </div>
            }
        </div>)

}
export default OrderTable;