
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

function ItemDetailContainer({ match }) {
    console.log('MATCH', match)
    console.log('ID', match.params.id)

    let charId = match.params.id
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get(`https://www.breakingbadapi.com/api/characters/${charId}`).then((res) => setUser(res.data))
    }, [charId]);

    return (
        <section className="item-detail-container">
            <div className="container">
                <h1>Item Detail Container</h1>
                <div className="item-detail-container-wrapper">
                    <ItemDetail product={user} />
                </div>
            </div>
        </section>


    )
}

export default ItemDetailContainer