import React from 'react'


function Details(props) {
    return (
        <div>
            {props !== undefined ? <div className="padre">
            <div className="container">
                <div className="card">
                    <article>
                        <img src={props.thumbnail} alt="imagen"></img>
                            <div className="text">

                                <h1> {props.title}</h1>
                                <p>${props.price}</p>
                                <p>Description</p>
                                
                            </div>
                    </article>

                </div>

            </div>
        </div> : <h2>no hay nada que mostrar</h2>}
        </div>
    )
}

export default Details
