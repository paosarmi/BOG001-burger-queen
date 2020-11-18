import React from 'react';
import { db } from "../../firebase";
import Breakfast from "../menuQueenBreakfast/MenuQueenBreakfast"
import "./OrderTable.scss";

const OrderTable = () => {

    const addProduct = () => {
        console.log("Producto")
    }

    return (
        <Breakfast addProductCrud={addProduct} />
    )
}
export default OrderTable;