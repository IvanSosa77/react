import React from 'react'

function ItemDetail(props) {
    return (
        <div>
            <div className="container">
                <div className="card">
                    <article>
                        <img src={props.image} alt="imagen"></img>
                            <div class="text">

                                <h1> {props.nombre}</h1>
                                <p>Especie: {props.descripcion}</p>
                                
                            </div>
                    </article>

                </div>

            </div>
        </div>
    )
}

export default ItemDetail
