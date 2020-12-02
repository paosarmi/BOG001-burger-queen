import React, { useState } from 'react';
import { db } from "../../firebase";
import TrashBucket from "../trashBucket/TrashBucket"
import "./OrderTable.scss";

const OrderTable = ({ orderList }) => {

    const addProduct = () => {
        console.log("Producto");
    }

    /*     const quantityProduct = () => {
            if (item.product !== item.product) {
                quantity == 1
                console.log("No existe")
            }
            else {
                quantity = + quantity
                console.log("Existe")
            }
        } */

    return (
        <div>
            {

                <div className="ItemTableContainer">
                    <div className="Product">
                        <p>{item.product}  </p>
                    </div>
                    <div className="Quantity">
                        <p>{quantityProduct}</p>
                    </div>
                    <div className="Price">
                        <p>...{item.price}</p>
                    </div>
                    <div>
                        <TrashBucket />
                    </div>
                </div>

            }
        </div>)

}

export default OrderTable;