import React, { useEffect } from 'react';
import { db } from "../../firebase";
import TrashBucket from "../trashBucket/TrashBucket"
import "./OrderTable.scss";

const OrderTable = ({ orderList }) => {

    //useEffect()
    return (
        <div>
            {
                orderList.map(item => (
                    <div className="ItemTableContainer">
                        <div className="Product">
                            <p>{item.product}  </p>
                        </div>
                        <div className="Quantity">
                            <p>1</p>
                        </div>
                        <div className="Price">
                            <p>...{item.price}</p>
                        </div>
                        <div>
                            <TrashBucket />
                        </div>
                    </div>))
            }
        </div>

    )
}
export default OrderTable;