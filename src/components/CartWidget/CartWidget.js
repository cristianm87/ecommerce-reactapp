
import React from 'react'
import {BiCart} from "react-icons/bi"
import "./CartWidget.css"

function CartWidget() {
    return (
        <a href="index.html">
            <BiCart className="cart-widget"style={{fontSize:"2.5rem"}}/>
        </a>
    )
}

export default CartWidget
