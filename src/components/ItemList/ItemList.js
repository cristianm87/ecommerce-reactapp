import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import axios from 'axios';

// Link Router Dom
import { Link } from 'react-router-dom'

function ItemList() {
    const [products, setProducts] = useState([])

    console.log("productos:", products);

    useEffect(() => {
        // setTimeout(() => {
        //     console.log("Hello")
        // }, 2000)

        axios.get('../../data/productos.json').then((res) => setProducts(res.data));
    }, []);

    return (
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
export default ItemList;

