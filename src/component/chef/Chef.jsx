import React from "react";
import WoodLogo from "../woodLogo/WoodLogo"
import "./Chef.scss";
import { Redirect } from 'react-router-dom'
var ReactDOM = require('react-dom');

class ChefOption extends React.Component {

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
            <div className="Chefs">
                <div className="Intro-body">
                    <WoodLogo />
                    <div className="Options-chef">
                        <div>
                            <button onClick={() => this.home()}> Volver </button>
                        </div>
                        <div className="PersonChef">
                            <listChef person="Yara Greyjoy" />
                            <listChef person="Yara Greyjoy" />
                        </div>
                    </div>
                </div >
            </div>
        );
    }
    home() {
        this.setState({ redirect: "/" })
    }
}
export default ChefOption;
