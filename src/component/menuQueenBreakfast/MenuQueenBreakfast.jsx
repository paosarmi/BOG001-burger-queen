import React, { useState } from 'react'
import Menu from "../../menu.json";
import jugo from "./jugo.png";
import sandwich from "./sandwich.png"
import "./MenuQueenBreakfast.scss";


const MenuQueenBreakfast = ({ addToOrder }) => {

    const initialStateProduct = {
        product: " ",
        price: " "
    };
    const [product, setProduct] = useState(initialStateProduct);

    const orderDetailChange = eventAfterChange => {
        const { product, price } = eventAfterChange.target.dataset;
        setProduct(product, price);
        addToOrder(product, price);
    }

    return (
        <div>
            <div className="Items-container">
                {
                    Menu.queenBreakfast.bebidas.map(item => (

                        <button className="Item" onClick={orderDetailChange} data-product={item.product} data-price={item.price}>
                            <img src={jugo} alt="Img Jugo" />
                            <div className="Content-item">{item.product}-{item.price}</div>
                        </button>

                    ))
                }
                {
                    Menu.queenBreakfast.sandwich.map(item => (

                        <button className="Item" onClick={orderDetailChange} data-product={item.product} data-price={item.price}>
                            <img src={sandwich} alt="Img Sandwich" />
                            <div className="Content-item">{item.product}-{item.price}</div>
                        </button>

                    ))
                }
            </div>
        </div>
    )
}

export default MenuQueenBreakfast;