import React, { Fragment } from "react";
import "./ChefButton.scss";
import ChefOption from "../chef/Chef"

function PersonChef() {
    return (

        <div className="Names-chefs">
            <button className="Chef">
                <ChefOption person="Yara Greyjoy" />
                <ChefOption person="Melisandre Red" />
            </button>
        </div>
    );
}

export default PersonChef;