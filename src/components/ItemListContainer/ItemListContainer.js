import React from 'react';
import "./ItemListContainer.css";
import ProductCard from '../ProductCard/ProductCard';

function ItemListContainer() {
    return (
        <section className="item-list">
            <div className="container">
                <section className="item-list-wrapper">
                    <ProductCard cardTitle={'Mouse Logitech'} cardModel={'Xrm 360'} cardPrice={'$2.500'} img={'./images/mouse.jpg'}/>
                </section>
            </div>
        </section>
    )
}

export default ItemListContainer
