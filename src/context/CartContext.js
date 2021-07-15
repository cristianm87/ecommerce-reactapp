import React, { createContext, useState } from 'react'


// crear el contexto
export const CartContext = createContext({});


export const CartProvider = ({defaultValue=[], children}) => {

    const [cart, setCart] = useState(defaultValue)

    const addItem = (itemNew, cantidad) => {
        console.log(itemNew)
        console.log(cantidad)
        let productIndex= []
        productIndex = cart.findIndex(producto => itemNew.item.id === producto.itemNew.item.id)
        if (productIndex === -1) {
            setCart(cart=>[...cart, {itemNew, cantidad}]);
        } else {
            let cartModify= [...cart];
            cartModify[productIndex].itemNew.cantidad += itemNew.cantidad;
            setCart(cartModify)
        }
    };

    const removeItem = (id) => {
        setCart (cart.filter(({itemNew})=> itemNew.item.id !== id));
    };


    const cantidadTotal =() =>{
        // let cantidad=0;
        // cart.forEach(({itemNew}) => { cantidad += parseInt(itemNew.cantidad)});
        // return parseInt(cantidad);
    }

    const clear = () => {
        setCart([])
    };

    const isInCart = () => {

    };

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cantidadTotal}}>
            {children}
        </CartContext.Provider>
    )
};