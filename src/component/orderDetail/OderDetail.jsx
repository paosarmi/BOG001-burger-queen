import React from 'react';
import OrderTable from "../orderTable/OrderTable"
import "./OrderDetail.scss";
import { Redirect } from 'react-router-dom'

class OrderDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
        };
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="Order-detail-container">
                <div className="Order-products-container">
                    <OrderTable />
                </div>
                <div className="Order-total-container">
                    <p>Total    5</p>
                </div>
                <div className="Submit-container">
                    <button className="Submit-order" onClick={() => this.OrderState()}>Enviar a cocina</button>
                </div >
            </div >
        )
    }
    OrderState() {
        this.setState({ redirect: "/order-state" })
    }
}
export default OrderDetail;