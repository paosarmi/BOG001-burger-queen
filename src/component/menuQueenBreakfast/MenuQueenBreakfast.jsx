import React, { useState } from 'react'
import Menu from "../../menu.json";
import "./MenuQueenBreakfast.scss";


const MenuQueenBreakfast = () => {

    const initialStateProduct = {
        product: " ",
        price: " "
    };
    const [product, setProduct] = useState(initialStateProduct);

    const orderDetailChange = eventAfterChange => {
        const { name, value } = eventAfterChange.target;

        console.log(name, value);
    }

    const submitOrderDetail = eventChangeSubmit => {
        console.log(product);
    }

    return (
        <div>
            <div className="Items-container">
                {
                    Menu.queenBreakfast.bebidas.map(item => (
                        <button className="Item" onClick={orderDetailChange} >{item.product}-{item.price} </button>
                    ))
                }
                {
                    Menu.queenBreakfast.sandwich.map(item => (
                        <button className="Item" onClick={orderDetailChange} >{item.product}-{item.price} </button>
                    ))
                }
            </div>
        </div>
    )
}

export default MenuQueenBreakfast;