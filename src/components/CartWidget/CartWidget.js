import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import "./CartWidget.css"
import { Link } from 'react-router-dom';


function CartWidget() {

    const [state, setState] = useContext(CartContext)
    return (
        <div className="cart-widget-container">
            <Link to="/cart">
                <ShoppingCartOutlinedIcon className="cart-widget" fontSize="large"/>
            </Link>
            <span style={{'color':'red'}}>Items: {state}</span>            
        </div>
    )
}

export default CartWidget
