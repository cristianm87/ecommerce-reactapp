import React from 'react'
import "./Item.css"

function Item({products}) {

    return (
        <>
            <article className="card">
                <div className="card-wrapper">
                    <div className="card-img">
                        <img src={products.avatar_url} alt="" />
                    </div>
                    <div className="card-body">
                        <p>User: {products.login}</p>
                        <p>id: {products.id}</p >
                    </div>
                    <div className="card-amount">
                    </div>
                </div>
            </article>
        </>
    )
}

export default Item
