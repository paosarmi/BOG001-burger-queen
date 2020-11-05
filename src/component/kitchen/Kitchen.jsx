import React from 'react'
import WoodLogo from "../woodLogo/WoodLogo";
import BackButton from "../backButton/BackButton";
import "./Kitchen.scss";
import { Redirect } from 'react-router-dom'
var ReactDOM = require('react-dom');

class KitchenOrder extends React.Component {

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
                <h1>Esta es la cocina :)</h1>
            </div>
        );
    }
    home() {
        this.setState({ redirect: "/" })
    }
}
export default KitchenOrder;