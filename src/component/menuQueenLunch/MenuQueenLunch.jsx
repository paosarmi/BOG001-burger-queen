import React from 'react'
import Menu from "../../menu.json";
import "./MenuQueenLunch.scss";

const MenuQueenLunch = () => {

    return (
        <div>
            <div>
                <h1>Hamburguesas</h1>
                <h2>Hamburguesa Simple</h2>
                {
                    Menu.queenLunch.hamburguesas.hamburguesaSimple.map(item => (
                        <button className="Item">{item.option}-{item.price} </button>
                    ))
                }
                <h2>Hamburguesa Doble</h2>
                {
                    Menu.queenLunch.hamburguesas.hamburguesaDoble.map(item => (
                        <button className="Item">{item.option}-{item.price} </button>
                    ))
                }

                <h2>Adicionales</h2>
                {
                    Menu.queenLunch.hamburguesas.adicionales.map(item => (
                        <button className="Item">{item.option}-{item.price} </button>
                    ))
                }
                <h1>Bebidas</h1>
                <br />
                {
                    Menu.queenLunch.bebidas.map(item => (
                        <button className="Item">{item.product}-{item.price} </button>
                    ))
                }
                <h1>Acompañamientos</h1>
                <br />
                {
                    Menu.queenLunch.acompañamientos.map(item => (
                        <button className="Item">{item.product}-{item.price} </button>
                    ))
                }
            </div>
        </div>
    )
}

export default MenuQueenLunch;