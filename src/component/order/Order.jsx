import React from 'react'
import WoodLogo from "../woodLogo/WoodLogo";
import BackButton from "../backButton/BackButton";
import MenuJson from "../../menu.json";
import MenuQueenBreakfast from "../menuQueenBreakfast/MenuQueenBreakfast";
import MenuQueenLunch from "../menuQueenLunch/MenuQueenLunch";
import OrderDetail from "../orderDetail/OderDetail"
import "./Order.scss";
import { Redirect } from 'react-router-dom'
var ReactDOM = require('react-dom');

class ClientOrder extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            showBreakfast: true,
            showLunch: false
        };
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
                                    <MenuQueenBreakfast />
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
                        <OrderDetail />
                    </div>
                </div>
            </div>
        );
    }
    displayBreakfast() {
        this.setState({
            showBreakfast: true,
            showLunch: false
        })
    }
    displayLunch() {
        this.setState({
            showLunch: true,
            showBreakfast: false
        })
    }

    home() {
        this.setState({ redirect: "/" })
    }
}
export default ClientOrder;