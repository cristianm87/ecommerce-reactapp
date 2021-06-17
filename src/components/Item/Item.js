import React, { useState, useEffect } from 'react'
import "./Item.css"
import ItemCount from '../ItemCount/ItemCount'


function Item() {

    const [data, setData] = useState([])

    console.log("data",data);

    useEffect(() => {
        
        // setTimeout(() => {
        //     console.log("Hello")
        // }, 2000)
        fetch(
            'https://api.github.com/users'
            )
            .then((res) => res.json())
            .then((dataApi) => setData(dataApi));
    }, []);

    return (
        <>
            {data.map((x) => {
                return(
                    <article className="card">
                        <div className="card-wrapper">
                            <div className="card-img">
                                <img src={x.avatar_url} alt="" />
                            </div>
                            <div className="card-body">
                                <p>User: {x.login}</p>
                                <p>id: {x.id}</p >
                                <p>Gihub:</p>
                                <p>{x.html_url}</p>
                            </div>
                            <div className="card-amount">
                                <ItemCount />
                            </div>
                        </div>
                    </article>                       
                )
            })}
        </>

    )
}

export default Item
