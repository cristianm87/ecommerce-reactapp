import React from 'react'
import "./ProductCard.css"
import ItemCount from '../ItemCount/ItemCount'
function ProductCard({ cardTitle, cardModel, cardPrice, img,}) {
    return (
        <article className="card">
            <div className="card-wrapper">
                <div className="card-img">
                    <img src={img} alt="" />
                </div>
                <div className="card-body">
                    <p>{cardTitle}</p>
                    <p>Modelo: {cardModel}</p >
                    <p>{cardPrice}</p>
                </div>
                <div className="card-amount">
                    <ItemCount />
                </div>
            </div>
        </article>
    )
}

export default ProductCard
