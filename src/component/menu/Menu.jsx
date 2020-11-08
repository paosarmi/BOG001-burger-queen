import React, { useState, useEffect } from 'react'
import Menu from "../../menu.json";
import "./Menu.scss";

const MenuOrder = () => {

    return (
        <div>
            <h1>Pedidos</h1>
            <ul>
                {
                    Menu.queenBreakfast.bebidas.map(item => (
                        <li >{item.product}-{item.price} </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MenuOrder;