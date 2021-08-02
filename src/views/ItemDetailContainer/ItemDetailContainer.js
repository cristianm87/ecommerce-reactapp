
import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import { db } from '../../firebase/firebase';

function ItemDetailContainer({ match }) {

    let itemId = match.params.id

    // FIREBASE:
    const [products, setProducts] = useState([])

    useEffect(() => {
        
        const getProducts = () => {

            db.collection('items').onSnapshot((querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id})
                })
                setProducts(docs.filter((element)=> element.id === itemId))
            })
        };
        getProducts()
    }, [itemId])

    return (
        <section className="item-detail-container">
            <div className="container">
                <h1>Detalles del Producto</h1>
                <div className="item-detail-wrapper">
                    <ItemDetail product={products} />
                </div>
            </div>
        </section>
    )
}

export default ItemDetailContainer