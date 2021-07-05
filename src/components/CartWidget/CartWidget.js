import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import "./CartWidget.css"
import { Link } from 'react-router-dom';


function CartWidget() {    
    return (
        <div className="cart-widget-container">
            <Link to="/cart">
                <ShoppingCartOutlinedIcon className="cart-widget" fontSize="large"/>
            </Link>
            <span style={{'color':'red'}}>Items:</span>            
        </div>
    )
}

export default CartWidget
