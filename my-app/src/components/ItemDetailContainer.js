import React,{useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import img from '../assets/Ivysaur.png'


function ItemDetailContainer() {
    const [value, setValue]= useState(null)
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=1')
        .then((res)=>res.json())
        .then((res)=>{setValue(res.results)})
    },[])

    return (
        <div>
            {value !== null ? (value.map((val, index)=>{
                    return <ItemDetail key ={index} id={index} image={img} descripcion={val.url} precio={val.name}/>
            })): <h1>Cargando página</h1>}
        </div>
    )
}

export default ItemDetailContainer
