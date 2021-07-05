import React, { createContext, useState } from 'react'


// crear el contexto
export const CartContext = createContext();


export const CartProvider = (props) => {

    const [state, setState] = useState('test')

    const addItem = (item, quantity) => {
        console.log('addItem')
   };

    return (
        <CartContext.Provider value={[state, setState, addItem]}>
            {props.children}
        </CartContext.Provider>
    )
};