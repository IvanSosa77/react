const array = 
[{
    nombre : "ivan",
    apellido: "sosa",
    edad: 21,
},
{
    nombre :"ivan",
    apellido: "daniel",
    edad: 22
}];

const getPost  = () =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const error = false;
            if(!error){
                resolve(array)
            }else{
                reject("hubo un error de carga");

            }
        },1500)
    })
}

getPost().then((array)=>{console.log(array)}).catch(error=>{console.log(error)});