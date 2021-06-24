import React from 'react'
import { useParams } from 'react-router-dom'
import './Category.css'
import ItemList from '../../components/ItemList/ItemList'

function Category() {

    const {id} = useParams()
    console.log(id)
    
    return (
        <div className="category">
            <h1>Categoria {id}</h1>
            <ItemList />
        </div>
    )
}

export default Category
