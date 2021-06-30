import React, { useContext } from 'react'
import { CartContext } from '../../CartContext';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import "./CartWidget.css"

function CartWidget() {
    const value = useContext(CartContext)
    return (
        <div className="cart-widget-container">
            <a href="index.html">
                <ShoppingCartOutlinedIcon className="cart-widget" fontSize="large"/>
            </a>
            <span style={{'color':'red'}}>Items: {value}</span>            
        </div>
    )
}

export default CartWidget
