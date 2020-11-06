import React from 'react'
import WoodLogo from "../woodLogo/WoodLogo";
import BackButton from "../backButton/BackButton";
import Menu from "../../menu.json";
import ProductsMenu from "../menu/Menu"
import "./Order.scss";
import { Redirect } from 'react-router-dom'
var ReactDOM = require('react-dom');

class ClientOrder extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        };
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <button className="Breakfast">Queen breakfast</button>
                <Menu />
                <button className="Lunch">Queen Lunch</button>
            </div>
        );
    }
    home() {
        this.setState({ redirect: "/" })
    }
}
export default ClientOrder;