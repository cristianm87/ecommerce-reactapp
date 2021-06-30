
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

function ItemDetailContainer({ match }) {
    // console.log('MATCH', match)
    let charId = parseInt(match.params.id)

    const [item, setItem] = useState([])
    
    useEffect(() => {
        axios.get(`../../data/productos.json`).then((res) => setItem(res.data.filter((element) => element.id === charId)));
    }, [charId]);

    return (
        <section className="item-detail-container">
            <div className="container">
                <h1>Detalles del Producto</h1>
                <div className="item-detail-wrapper">
                    <ItemDetail product={item} />
                </div>
            </div>
        </section>
    )
}

export default ItemDetailContainer