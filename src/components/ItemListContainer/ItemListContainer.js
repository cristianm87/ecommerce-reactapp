import React from 'react';
import "./ItemListContainer.css";
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';

function ItemListContainer() {
    return (
        <section className="item-list">
            <div className="container">
                <section className="item-list-wrapper">
                    <ItemList />
                </section>
            </div>
        </section>
    )
}

export default ItemListContainer
