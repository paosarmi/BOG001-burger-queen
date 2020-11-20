import React from "react";
import trash from "./basura.png";
import "./TrashBucket.scss";

function deleteProduct() {

    //const deleteOrderList

    return (
        <button>
            <img src={trash} alt="Loguito" className="trash" />
        </button>
    )
}
export default deleteProduct;