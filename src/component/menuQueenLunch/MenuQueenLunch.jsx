import React, { useState } from 'react'
import Menu from "../../menu.json";
import jugo from "./jugo.png"
import "./MenuQueenLunch.scss";

const MenuQueenLunch = ({ addToOrder }) => {

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
            <div className="Lunch-container">
                <div>
                    <h2>Hamburguesa Simple</h2>
                </div>
                <div className="Title-items">
                    {
                        Menu.queenLunch.hamburguesas.hamburguesaSimple.map(item => (
                            <button className="Item" onClick={orderDetailChange} data-product={item.product} data-price={item.price}>
                                <img src="" alt="Img" />
                                <div className="Content-item"> {item.product}-{item.price}</div>
                            </button>
                        ))
                    }
                </div>
                <h2>Hamburguesa Doble</h2>
                <div className="Title-items">
                    {
                        Menu.queenLunch.hamburguesas.hamburguesaDoble.map(item => (
                            <button className="Item" onClick={orderDetailChange} data-product={item.option} data-price={item.price}>
                                <img src="" alt="Img" />
                                <div className="Content-item"> {item.option}-{item.price}</div>
                            </button>
                        ))
                    }
                </div>
                <h2>Adicionales</h2>
                <div className="Title-items">
                    {
                        Menu.queenLunch.hamburguesas.adicionales.map(item => (
                            <button className="Item" onClick={orderDetailChange} data-product={item.option} data-price={item.price}>
                                <img src="" alt="Img" />
                                <div className="Content-item"> {item.option}-{item.price}</div>
                            </button>
                        ))
                    }
                </div>
                <h1>Bebidas</h1>
                <div className="Title-items">
                    {
                        Menu.queenLunch.bebidas.map(item => (
                            <button className="Item" onClick={orderDetailChange} data-product={item.product} data-price={item.price}>
                                <img src={jugo} alt="Img jugo" />
                                <div className="Content-item">{item.product}-{item.price}</div>
                            </button>
                        ))
                    }
                </div>
                <h1>Acompañamientos</h1>
                <div className="Title-items">
                    {
                        Menu.queenLunch.acompañamientos.map(item => (
                            <button className="Item" onClick={orderDetailChange} data-product={item.product} data-price={item.price}>
                                <img src="" alt="Img " />
                                <div className="Content-item">{item.product}-{item.price}</div>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MenuQueenLunch;