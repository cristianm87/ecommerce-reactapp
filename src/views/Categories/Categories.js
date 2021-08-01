import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './Categories.css'
import { db } from '../../firebase/firebase';
import Item from '../../components/Item/Item'
import { Link } from 'react-router-dom'
import '../../App.css'

function Categories() {

    const {id} = useParams()

    // FIREBASE:
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = () => {

            db.collection('items').onSnapshot((querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                setProducts(docs.filter((element) => element.categoria.toLowerCase() === id))
            })
        };
        getProducts()
    }, [id])

    return (
        <section className="categories-container">
            <div className="container">
                <h1>{id.charAt(0).toUpperCase() + id.slice(1)}</h1>
                <div className="categories-wrapper">
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
                </div>
            </div>            
        </section>
    )
}

export default Categories
