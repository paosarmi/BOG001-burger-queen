import React from 'react'
import Menu from "../../menu.json";
import "./Menu.scss";

const MenuOrder = () => {


    const [breakfast, setBreakfast] = React.useState([])

    React.useEffect(() => {
        /* console.log("useEffect") */
        getMenu()
    }, [])


    const getMenu = async () => {
        const productsMenu = await { Menu }

        /* console.log(productsMenu); */
        setBreakfast(productsMenu)
    }

    return (
        <div>
            <h1>Pedidos</h1>
            <ul>
                {
                    breakfast.map(item => (
                        <li key={item.queenBreakfast}>{item.bebidas} - {item.sandwich}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MenuOrder;