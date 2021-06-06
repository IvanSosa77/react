import React, {useState} from 'react';


function Contador(){
    const[valor, setValor] = useState(0)
    function handlerIncrement(){
        setValor(valor + 1);
    }

    function handlerDecrement(){
        if(valor >= 1){
            setValor(valor -1)
        }
        
    }


    return(
        <div id="contenedor">
            <h1>contador</h1>
            <button onClick={handlerIncrement}>Aumentar</button>
            <p>{valor}</p>
            <button onClick={handlerDecrement}>Restar</button>
        </div>
        )
}

export default Contador;