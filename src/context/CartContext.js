import React, { createContext, useState } from 'react'
import { useEffect } from 'react';

// crear el contexto
export const CartContext = createContext({});


export const CartProvider = ({defaultValue=[], children}) => {

    const [cart, setCart] = useState(defaultValue)
    const [ordenCliente, setOrdenCliente] = useState({})

    const addItem = (itemNew) => {
        let productIndex= []
        productIndex = cart.findIndex(producto => itemNew.item.id === producto.itemNew.item.id)
        if (productIndex === -1) {
            setCart(cart=>[...cart, {itemNew}]);
        } else {
            let cartModify= [...cart];
            cartModify[productIndex].itemNew.quantity += itemNew.quantity;
            setCart(cartModify)
        }
    };

    const removeItem = (id) => {
        setCart (cart.filter(({itemNew})=> itemNew.item.id !== id));
    };

    const cantidadTotal =() =>{
        let cantTotal=0;
        cart.forEach(({itemNew}) => { cantTotal += parseInt(itemNew.quantity)});
        return parseInt(cantTotal);
    }

    const clear = () => {
        setCart([])
    };

    const precioTotal =() =>{
        let total=0;
        cart.forEach(({itemNew}) => { total +=parseInt(itemNew.item.precio) * parseInt(itemNew.quantity)});
        return parseInt(total);
    }

    const order = (datosCliente) => {
        setOrdenCliente({...datosCliente, ...[cart]})
    }

    useEffect(() => {
    console.log(ordenCliente)

    })
    return (
        <CartContext.Provider value= {{cart, addItem, removeItem, clear, cantidadTotal, precioTotal, order, ordenCliente}}>
            {children}
        </CartContext.Provider>
    )
};