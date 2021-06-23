import React from 'react';
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer() {

    const onAdd=(cantidad) => {
        console.log('agregar al carrito', cantidad)
    }

    return (
        <section className="item-list-container">
            <div className="container">
                <div className="item-list-container-wrapper">
                    <section className="borrar">
                        <ItemCount onAdd={onAdd} stock={5} initial={1} />
                    </section>
                    <ItemList />
                </div>
            </div>
        </section>
    )
}

export default ItemListContainer
