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

        axios.get('https://api.github.com/users').then((res) => setProducts(res.data));
    }, []);

    products.length = 8;

    return (
        <ul>
            {products.map((product) => {
                return (
                    <li key={product.id}>
                        <Link to={`/detail/${product.login}`}>
                            <Item products={product} />
                        </Link>
                        
                    </li>
                )
            })}
        </ul>
    )
}
export default ItemList;

