import React from 'react';
import "./List.css";

function List({greeting}) {
    return (
        <section className="list">
            <div className="container">
                <div className="list-wrapper">
                    <p style={{fontSize:"1.5rem"}}>{greeting}</p>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>                    
                </div>
            </div>
        </section>
    )
}

export default List
