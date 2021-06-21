import React from 'react';

const objetos = [{
    name:"ivan",
    apellido :"sosa",
    profesion : "Dev",
}]


function Promesa(){
const prome = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const error = Math.random() > 0.85;
        if(!error){
            resolve(objetos);
        }else{
            reject("hubo un error en la carga")
        }
    })
},500)

prome.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})


        return(
            <div>
                <h1></h1>
            </div>
        )
}

export default Promesa;