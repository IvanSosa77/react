import React from 'react'
import {useState} from 'react'
import '../components/DetailContainer.css'

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

    return (
        <div className="dadCounter">
            <button onClick={handelInc}>+</button>
            <p>{value}</p>
            <button onClick={handelDec}>-</button>
        </div>
    )
}

export default ItemCounter
