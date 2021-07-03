import React, { createContext, useState } from 'react'


// crear el contexto
export const CartContext = createContext();


export const ItemsProvider = (props) => {

    const [state, setState] = useState('Test Context')

    return (
        <CartContext.Provider value={[state, setState]}>
            {props.children}
        </CartContext.Provider>
    )
};