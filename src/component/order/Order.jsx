import React from 'react'
import WoodLogo from "../woodLogo/WoodLogo";
import BackButton from "../backButton/BackButton";
import MenuJson from "../../menu.json";
import MenuQueenBreakfast from "../menuQueenBreakfast/MenuQueenBreakfast";
import MenuQueenLunch from "../menuQueenLunch/MenuQueenLunch";
import OrderDetail from "../orderDetail/OderDetail"
import ModalWindowWaiter from "../modalWindow/ModalWindow"
import "./Order.scss";
import { Redirect } from 'react-router-dom'
var ReactDOM = require('react-dom');

class ClientOrder extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            showBreakfast: true,
            showLunch: false,
            showModal: false,
            showOrder: [],
            orderList: []
        };
        this.addToOrder = this.addToOrder.bind(this);
    }



    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="Waiters">
                <div className="Intro-body">
                    <WoodLogo />
                    <div className="Menu-buttons">
                        <div className="Buttons-container">
                            <button className="OptionMenu" onClick={() => this.displayBreakfast()}>Queen breakfast</button>
                            <button className="OptionMenu" onClick={() => this.displayLunch()}>Queen Lunch</button>
                        </div>
                        {
                            this.state.showBreakfast ?
                                <div>
                                    <MenuQueenBreakfast updateItemProducts={this.updateProduct} addToOrder={this.addToOrder} />
                                </div>
                                : null
                        }
                        {
                            this.state.showLunch ?
                                <div>
                                    <MenuQueenLunch />
                                </div>
                                : null
                        }
                        <div>
                            <BackButton path="/waiter" />
                        </div>
                    </div>
                    <div className="Total-order">
                        <OrderDetail showModal={this.displayModal} orderList={this.state.orderList} />
                    </div>
                    <div>
                        <ModalWindowWaiter />
                    </div>
                </div>
            </div>
        );
    }
    displayBreakfast() {
        this.setState({
            showBreakfast: true,
            showLunch: false,
            showModal: false
        })
    }
    displayLunch() {
        this.setState({
            showLunch: true,
            showBreakfast: false,
            showModal: false
        })
    }
    displayModal() {
        console.log("displayModal");
    }
    updateProduct = () => {
        /* this.setState(previousState => ({
            showOrder: [
                ...previousState.showOrder,
                { producto: { product }, precio: { price } }
            ]
        })) */


    }

    addToOrder(product, price) {
        let _order = this.state.orderList;
        _order.push({ product, price })
        //TODO agregar cantidad del producto al arreglo segun esta condiciones
        // Si NO hay otro producto igual en el orderList, se agrega el prodcuto con cantidad  en 1
        // De lo contrario, si HAY otro producto igual en el orderList, no se agrega uno nuevo y 
        // en su lugar se aumenta la cantidad +1 orderList[index].quantity++
        this.setState({
            orderList: _order
        });
    }

    home() {
        this.setState({ redirect: "/" })
    }
}
export default ClientOrder;