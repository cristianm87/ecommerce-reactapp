import React, { useState, useEffect, useContext } from 'react';
import './Order.css';
import { db } from '../../firebase/firebase';
import { CartContext } from '../../context/CartContext';

function Order() {
    const {clear, cliente} = useContext(CartContext);
    const [datosCliente, setDatosCliente] = useState({});
    const [orderItems, setOrderItems] = useState([]);
    const [idOrder, setIdOrder] = useState('');

// Recibe de Firebase
    useEffect(()=> {

        let unmounted = false;

        const getOrder = () => {
            db.collection('orders')
            .where('datosCliente.nombre', '==', cliente.nombre)
            .where('datosCliente.telefono', '==', cliente.telefono)
            .where('datosCliente.email', '==', cliente.email)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    if (!unmounted) {
                        setIdOrder(doc.id)
                        setDatosCliente(doc.data().datosCliente)
                        setOrderItems(doc.data().itemsCliente)                        
                    }

                });
            })
            .catch(err =>{console.log(err)})
            .finally(()=>clear());
        }

        getOrder()

        return () => {
            unmounted = true;
        };

    },[clear, cliente.nombre, cliente.telefono, cliente.email]);

    return (
        <section className='order-container'>
            <div className='container'>
                <h1>Orden de compra</h1>
                <article>
                    <h2>Gracias <span>{datosCliente.nombre}</span>!</h2>
                    <h3>
                        <p>Su numero de orden es: <span>{idOrder}</span></p>                       
                    </h3>
                    <div className="order-detail">
                        <h4>Detalle de la compra:</h4>
                        <ul>
                            {orderItems.map(({itemNew})=>
                                <li key={itemNew.item.id}>
                                    <div className="cart-li">
                                        <div className="cart-img">
                                            <img src={itemNew.item.img} alt={itemNew.item.img}/>                                            
                                        </div>
                                        <p>&nbsp;{itemNew.item.shortDescription}</p>
                                        <p> 
                                            &nbsp;
                                            Precio: <b>${itemNew.item.precio}</b>
                                            &nbsp;
                                            Cantidad: <b>{itemNew.quantity}</b>
                                            &nbsp;
                                        </p>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Order
