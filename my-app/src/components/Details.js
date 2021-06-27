import React,{useState,useContext} from 'react'
import ItemCount from '../components/ItemCounter';
import {orderUpdateContext} from '../components/CartContext';




function Details(props) {

const [counter,setCounter]=useState(0);

const addItem =useContext(orderUpdateContext);

function handelInc(){
    if(counter < props.props.available_quantity)
    setCounter(counter + 1)
}

function handelDec(){
    if(counter > 0){
        setCounter(counter -1)
    }
    
}



    return (
        <div>
            {props !== undefined ? <div className="padre">
            <div className="container">
                <div className="card">
                    <article>
                        <img src={props.props.thumbnail} alt="imagen"></img>
                            <div className="text">

                                <h1> {props.props.title}</h1>
                                <p>${props.props.price}</p>
                                <p>Stock: {props.props.available_quantity}</p>
                                <p>Description</p>
                                <ItemCount suma={handelInc} resta={handelDec} contador={counter}/>
                                <button id="btn2"   onClick={()=>addItem(props.props.title,props.props.price,counter)}>comprar</button>
                                
                                
                            </div>
                    </article>

                </div>

            </div>
        </div> : <h2>no hay nada que mostrar</h2>}
        </div>
    )
}

export default Details
