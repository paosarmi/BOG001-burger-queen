import React from 'react'
import Menu from "../../menu.json";
import "./Menu.scss";

function MenuOrder() {
    const [breakfast, setBreakfast] = React.useState([])
    React.useEffect(() => {
        getMenu()
    })

    const getMenu = () => {
        const productsMenu = { Menu }
        setBreakfast(productsMenu)
    }

    return (
        <div>
            <h1>Pedidos</h1>
        </div>
    )
}

export default MenuOrder;