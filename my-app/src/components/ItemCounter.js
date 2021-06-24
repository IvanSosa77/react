import React from 'react'
import {useState} from 'react'
import '../components/DetailContainer.css'
//import {Link} from 'react-router-dom'

function ItemCounter({stock}) {
    const [value,setValue] = useState(0);
    
        function handelInc(){
            if(value < stock)
            setValue(value + 1)
        }

        function handelDec(){
            if( value <= stock && value >= 1){
                setValue(value -1)
            }
            
        }


        function handelAdd(){
            alert(`se agrego ${value} productos al carro`)
        }

    return (
        <div className="dadCounter">
            <button onClick={handelInc}>+</button>
            <p>{value}</p>
            <button onClick={handelDec} >-</button>
            <div id="comprar">
                <button id="btn2" disabled={value<=0}  onClick={handelAdd}>comprar</button>
            </div>
        </div>
    )
}

export default ItemCounter
