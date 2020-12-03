import React, { useState } from "react";
import trash from "./basura.png";
import "./TrashBucket.scss";
var ReactDOM = require('react-dom');

const deleteProduct = () => {
    return (
        <button>
            <img src={trash} alt="Loguito" className="trash" />
        </button>
    )
}
export default deleteProduct;