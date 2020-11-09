import React from 'react'
import WoodLogo from "../woodLogo/WoodLogo";
import BackButton from "../backButton/BackButton";
import MenuJson from "../../menu.json";
import MenuQueenBreakfast from "../menuQueenBreakfast/MenuQueenBreakfast";
import MenuQueenLunch from "../menuQueenLunch/MenuQueenLunch";
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
            <div className="Waiters">
                <div className="Intro-body">
                    <WoodLogo />
                    <div>
                        <button className="OptionMenu">Queen breakfast</button>
                        <MenuQueenBreakfast />
                        <button className="OptionMenu">Queen Lunch</button>
                        <MenuQueenLunch />
                    </div>
                </div>
            </div>
        );
    }
    home() {
        this.setState({ redirect: "/" })
    }
}
export default ClientOrder;