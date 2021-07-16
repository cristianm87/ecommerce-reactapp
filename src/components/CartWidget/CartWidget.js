import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import "./CartWidget.css"
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

function CartWidget() {
    const {cantidadTotal} = useContext(CartContext);
    return (
        <div className="cart-widget-container">
            <Link to="/cart">
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={cantidadTotal()} color="secondary">
                        <ShoppingCartOutlinedIcon className="cart-widget" fontSize="large"/>
                    </Badge>
                </IconButton>
            </Link>
        </div>
    )
}

export default CartWidget
