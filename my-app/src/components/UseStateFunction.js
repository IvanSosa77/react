import React, {useState} from 'react';

function UseState(){
    const [animal, setAnimal] = useState(null)
    function handlerAnimal(){
        setAnimal('jirafa')
    }
    return(
        <div>
            <button onClick={handlerAnimal}>click</button>
            {console.log(animal)}
        </div>
    )
}

export default UseState;