import React, { useState, useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import IconCartRemove from '@material-ui/icons/RemoveShoppingCartOutlined';
import Form from '../../components/Form/Form';

function Cart() {

    const {cart, removeItem} = useContext(CartContext);


    return (
        <>
        <section className="cart-container">
            <div className="container">
                <h1>Componente Cart</h1>
                {cart.length === 0 ? (
                    <h1 className="text-center">No hay productos en el carrito</h1>
                )
                :
                (
                <>
                    <div className="cart-wrapper">
                        <div className="cart-list">
                            <ul>
                                {cart.map(({itemNew})=>
                                    <li key={itemNew.item.id}>
                                        <div>
                                            <img src={itemNew.item.img} alt="" style={{width:"100px"}}/>
                                            <p>&nbsp;{itemNew.item.shortDescription}</p>
                                            <p> 
                                                &nbsp;
                                                Cantidad: <b>{itemNew.quantity}</b>
                                                &nbsp;
                                                Precio: <b>${itemNew.item.precio}</b>
                                                &nbsp;
                                            </p>
                                            <button onClick={()=> removeItem(itemNew.item.id)}><IconCartRemove /></button>
                                        </div>
                                    </li>
                                )}
                            </ul>                           
                        </div>
                        <div className="cart-form">
                            <Form />
                        </div>
                    </div>
                    </>
                )
                }
            </div>
        </section>

    </>
    )
}

export default Cart