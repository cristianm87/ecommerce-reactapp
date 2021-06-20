import React from 'react'
import "./Item.css"

function Item({img, login, id, github}) {

    return (
        <>
            <article className="card">
                <div className="card-wrapper">
                    <div className="card-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="card-body">
                        <p>User: {login}</p>
                        <p>id: {id}</p >
                        <p>Gihub:</p>
                        <p>{github}</p>
                    </div>
                    <div className="card-amount">
                    </div>
                </div>
            </article>
        </>
    )
}

export default Item
