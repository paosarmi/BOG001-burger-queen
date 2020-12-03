import React, { useState } from 'react';
import TrashBucket from "../trashBucket/TrashBucket"
import "./OrderTable.scss";

const OrderTable = ({ product, price, quantity, deleteToOrder }) => {
    /*  const deleteChangeProduct = () => { */
    deleteToOrder(product, price);
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
                        <TrashBucket onClick={deleteToOrder} /* deleteToOrder={this.deleteToOrder} */ />
                    </div>
                </div>
            }
        </div>)

}
export default OrderTable;