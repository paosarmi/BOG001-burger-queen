import React from 'react'
import Menu from "../../menu.json";
import "./MenuQueenLunch.scss";

const MenuQueenLunch = () => {

    return (
        <div>
            <div className="Lunch-container">
                <div>
                    {/* <h1>Hamburguesas</h1>
                    <br /> */}
                    <h2>Hamburguesa Simple</h2>
                </div>
                <div className="Title-items">
                    {
                        Menu.queenLunch.hamburguesas.hamburguesaSimple.map(item => (
                            <button className="Item">{item.option}-{item.price} </button>
                        ))
                    }
                </div>
                <h2>Hamburguesa Doble</h2>
                <div className="Title-items">
                    {
                        Menu.queenLunch.hamburguesas.hamburguesaDoble.map(item => (
                            <button className="Item">{item.option}-{item.price} </button>
                        ))
                    }
                </div>
                <h2>Adicionales</h2>
                <div className="Title-items">
                    {
                        Menu.queenLunch.hamburguesas.adicionales.map(item => (
                            <button className="Item">{item.option}-{item.price} </button>
                        ))
                    }
                </div>
                <h1>Bebidas</h1>
                <div className="Title-items">
                    {
                        Menu.queenLunch.bebidas.map(item => (
                            <button className="Item">{item.product}-{item.price} </button>
                        ))
                    }
                </div>
                <h1>Acompañamientos</h1>
                <div className="Title-items">
                    {
                        Menu.queenLunch.acompañamientos.map(item => (
                            <button className="Item">{item.product}-{item.price} </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MenuQueenLunch;