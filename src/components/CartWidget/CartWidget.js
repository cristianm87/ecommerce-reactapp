import React from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import "./CartWidget.css"

function CartWidget() {
    return (
        <a href="index.html">
            <ShoppingCartOutlinedIcon className="cart-widget" fontSize="large"/>
        </a>
    )
}

export default CartWidget
