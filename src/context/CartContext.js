import React, { createContext, useState } from 'react'


// crear el contexto
export const CartContext = createContext({});


export const CartProvider = ({defaultValue=[], children}) => {

    const [cart, setCart] = useState(defaultValue)

    const addItem = (itemNew, quantity) => {
        let productIndex= []
        productIndex = cart.findIndex(producto => itemNew.item.id === producto.itemNew.item.id)
        if (productIndex === -1) {
            setCart(cart=>[...cart, {itemNew, quantity}]);
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
        console.log(cantTotal)
        return parseInt(cantTotal);
    }

    const clear = () => {
        setCart([])
    };

    const isInCart = () => {

    };

    return (
        <CartContext.Provider value= {{cart, addItem, removeItem, clear, cantidadTotal}}>
            {children}
        </CartContext.Provider>
    )
};