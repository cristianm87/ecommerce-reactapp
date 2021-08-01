import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import Spinner from '../Spinner/Spinner';
//FIREBASE
import { db } from '../../firebase/firebase';
// Link Router Dom
import { Link } from 'react-router-dom'

function ItemList() {

    // FIREBASE:
    const [products, setProducts] = useState([])

    const getProducts = () => {

        db.collection('items').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            setProducts(docs)
        })
    };

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            {products.length === 0 ? 
            (
                <div className="itemlist-spinner">
                    <Spinner />                    
                </div>
            )
            :
            (
                <ul>
                    {products.map((product) => {
                        return (
                            <li key={product.id}>
                                <Link className="item-list-link" to={`/item/${product.id}`}>
                                    <Item products={product} />
                                </Link>
                            </li>
                        )
                    })}
                </ul>                
            )
            }
        </>

    )
}
export default ItemList;

