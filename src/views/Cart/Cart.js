import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function Cart() {

    const {cart, setCart} = useContext(CartContext);

    return (
        <div>
            <h1 style={{'color': 'black', 'textAlign': 'center'}}>Componente Cart</h1>
            {console.log(cart.item)}
        </div>
    )
}

export default Cart