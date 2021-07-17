import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import IconCartRemove from '@material-ui/icons/RemoveShoppingCartOutlined';
import Form from '../../components/Form/Form';
import { db } from '../../firebase/firebase';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Cart() {

    const {cart, removeItem, precioTotal} = useContext(CartContext);
    const [orderId, setOrderId] = useState([])

    const order = async (values) => {
        await db.collection('orders').doc().set(values)
        console.log('nueva orden creada')
    };

    const getOrder = () => {
        db.collection('orders').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            setOrderId(docs)
        })
    };

    useEffect(() => {
        getOrder()
    }, [])
    return (
        <>
        <section className="cart-container">
            <div className="container">
                <h1>Componente Cart</h1>
                {cart.length === 0 ? (
                    <>  
                        <br />
                        <h1 className="text-center">(No hay productos en el carrito)</h1>
                        <br />
                        <Link to="/">
                            <Button variant="contained" color="primary" size="large">
                                Seguir Comprando
                            </Button>
                        </Link>
                    </>
                )
                :
                (
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
                        <h2>Total: ${precioTotal()}</h2>
                        <ul>
                            {orderId.map(x => (
                                <li 
                                    key={x.id}>
                                    Hola {x.nombre} <br />
                                    su numero de orden es: <br />
                                    <b>{x.id} </b>
                                </li>
                                
                            ))}                                 
                        </ul>
                    
                    </div>
                    <div className="cart-form">
                        <Form order={order}/>
                    </div>
                </div>
                )
                }
            </div>
        </section>

    </>
    )
}

export default Cart