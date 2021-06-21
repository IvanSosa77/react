import React,{useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import './DetailContainer.css'
//import img from '../assets/Ivysaur.png'


function ItemDetailContainer() {
    const [value, setValue]= useState(null)
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/?page=1&limit=5')
        .then((res)=>res.json())
        .then((res)=>{setValue(res.results)})
    },[])

    return (
        <div className="parentElement">
            {value !== null ? (value.map((val, index)=>{
                    return <ItemDetail  key ={index} id={index} image={val.image} descripcion={val.species} nombre={val.name}/>
            })): <h1>Cargando página</h1>}
        </div>
    )
}

export default ItemDetailContainer
