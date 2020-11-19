import React from 'react';
import OrderTable from "../orderTable/OrderTable"
import "./OrderDetail.scss";
import { Redirect } from 'react-router-dom'

class OrderDetail extends React.Component {

    orderList = [1, 2, 3]
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
        };
    }

    addToOrderList(order) {
        this.orderList.push(order);
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (

            <div className="Order-detail-container">
                <div className="Order-products-container">
                    <OrderTable orderList={this.orderList} />
                </div>
                <div className="Order-total-container">
                    <p>Total    5</p>
                </div>
                <div className="Submit-container">
                    <button className="Submit-order" onClick={this.props.showModal}>Enviar a cocina</button>
                </div >
            </div >

        )
    }
    OrderState() {
        this.setState({ redirect: "/order-state" })
    }
    showModal() {
        this.props.showModal()
    }
}
export default OrderDetail;