import React from 'react'

function Item(props) {
    return (
        <div>
            <div className="container">
            <div className="card">
                <article>
                    <img src={props.image}></img>
                        <div class="text">
                            <h3 id={props.index}>{props.title}</h3>
                            <p> {props.precio}usd</p>
                            <button>Comprar</button>
                        </div>
                </article>

        </div>

        </div>
        </div>
    )
}

export default Item
