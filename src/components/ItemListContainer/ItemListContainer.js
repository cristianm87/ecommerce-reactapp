import React from 'react';
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';

function ItemListContainer() {

    return (
        <section className="item-list-container">
            <div className="container">
                <h1>Todos los productos</h1>
                <div className="item-list-container-wrapper">
                    <ItemList />
                </div>
            </div>
        </section>
    )
}

export default ItemListContainer