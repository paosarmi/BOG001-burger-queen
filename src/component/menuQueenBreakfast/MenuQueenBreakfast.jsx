import React from 'react'
import Menu from "../../menu.json";
import "./MenuQueenBreakfast.scss";

const MenuQueenBreakfast = () => {

    return (
        <div>
            <div className="Items-container">
                {
                    Menu.queenBreakfast.bebidas.map(item => (
                        <button className="Item" >{item.product}-{item.price} </button>
                    ))
                }
                {
                    Menu.queenBreakfast.sandwich.map(item => (
                        <button className="Item" >{item.product}-{item.price} </button>
                    ))
                }
            </div>
        </div>
    )
}

export default MenuQueenBreakfast;