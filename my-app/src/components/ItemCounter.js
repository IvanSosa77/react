import React from 'react'
import '../components/DetailContainer.css'
//import {Link} from 'react-router-dom'

function ItemCounter(props) {

    return (
        <div className="dadCounter">
            <button onClick={props.suma}>+</button>
            <p>{props.contador}</p>
            <button onClick={props.resta} >-</button>
            <div id="comprar">
                
            </div>
        </div>
    )
}

export default ItemCounter
