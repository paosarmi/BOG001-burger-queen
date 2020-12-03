import React, { useState } from 'react';
import { db } from "../../firebase";
import TrashBucket from "../trashBucket/TrashBucket"
import "./OrderTable.scss";

const OrderTable = ({ product, price, quantity }) => {

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
                        <TrashBucket />
                    </div>
                </div>
            }
        </div>)

}

export default OrderTable;