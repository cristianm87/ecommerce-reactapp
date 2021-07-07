import React, { createContext, useState } from 'react'


// crear el contexto
export const CartContext = createContext();


export const CartProvider = ({defaultValue = [], children}) => {

    const [cart, setCart] = useState(defaultValue)

    const addItem = ({item, quantity}) => {
        setCart({item, quantity})
    };

    console.log(cart)
    const removeItem = () => {

    };

    const clear = () => {

    };

    const isInCart = () => {

    };

    return (
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>
    )
};