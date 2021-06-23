
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
function ItemDetailContainer({ match }) {
    // console.log('MATCH', match)
    // console.log('Login', match.params.login)
    let userLogin = match.params.login
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`https://api.github.com/users/${userLogin}`).then((res) => setUser(res.data))
    }, [userLogin]);

    return (
        <section className="item-detail-container">
            <div className="container">
                <div className="item-detail-container-wrapper">
                    <ItemDetail product={user}/>
                </div>            
            </div>            
        </section>


    )
}

export default ItemDetailContainer