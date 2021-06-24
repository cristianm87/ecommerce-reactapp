import React from 'react'
import './ItemDetail.css'

function ItemDetail({ product }) {
    console.log('item detail', product)
    return (
        <>
            {product.map((x) => {
                return (
                    <article key={x.char_id} className="card">
                        <div className="card-wrapper">
                            <div className="card-img">
                                <img src={x.img} alt="img" />
                            </div>
                            <div className="card-body">
                                <p>Name: {x.name}</p>
                                <p>Nickname: {x.nickname}</p>
                                <p>Birthday: {x.birthday}</p >
                                <p>Occupation: {x.occupation}</p>
                                <p></p>
                                {/* <p>Gihub:</p> */}
                                {/* <a href={product.html_url} target='_blank' rel="noopener noreferrer"><p>{product.html_url}</p></a> */}
                            </div>
                            <div className="card-amount">
                            </div>
                        </div>
                    </article>
                );
            })}
        </>
    )
}

export default ItemDetail
