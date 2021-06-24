import React from 'react'
import Detail from './Details'
import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react';

function ItemDetailContainer() {

  const [produ,setProdu] = useState([])

  let {product_id} = useParams()
  

  useEffect(()=>{
    fetch(`https://api.mercadolibre.com/items/${product_id}?include_attributes-all`)
    .then(res => res.json())
    .then(res =>{setProdu(res)})
  },[product_id])


  return (
    <div>
        <Detail props={produ}/>
    </div>
  )
}

export default ItemDetailContainer
