import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList() {
    const [products, setProducts] = useState([])

    console.log("productos:", products);

    useEffect(() => {
        // setTimeout(() => {
        //     console.log("Hello")
        // }, 2000)
        fetch(
            'https://api.github.com/users'
            )
            .then((res) => res.json())
            .then((dataApi) => setProducts(dataApi));
    }, []);

    return (
        <ul>
            {products.map((producto) => {
                return (
                    <li key={producto.id}>
                        <Item img={producto.avatar_url} login={producto.login} id={producto.id} github={producto.html_url}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default ItemList;

