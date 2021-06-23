import React from 'react'
import './ItemDetail.css'

function ItemDetail({product}) {
    return (
        <>
            <article className="card">
                <div className="card-wrapper">
                    <div className="card-img">
                        <img src={product.avatar_url} alt="" />
                    </div>
                    <div className="card-body">
                        <p>User: {product.login}</p>
                        <p>id: {product.id}</p >
                        <p>Gihub:</p>
                        <a href={product.html_url} target='_blank' rel="noopener noreferrer"><p>{product.html_url}</p></a> 
                    </div>
                    <div className="card-amount">
                    </div>
                </div>
            </article>
        </>
    )
}

export default ItemDetail
