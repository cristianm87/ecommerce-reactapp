import React from 'react'
import "./Item.css"

function Item({ products }) {

    return (
        <>
            <article className="card">
                <div className="card-wrapper">
                    <div className="card-img">
                        <img src={products.img} alt="" />
                    </div>
                    <div className="card-body">
                        <p>Name: {products.name}</p>
                    </div>
                    <div className="card-amount">
                    </div>
                </div>
            </article>
        </>
    )
}

export default Item
