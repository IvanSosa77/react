import React from 'react'
import Detail from './Details'
import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react';
import {getFirestore} from '../components/Firebase';

function ItemDetailContainer() {

  const [produ,setProdu] = useState([])

  let {product_id} = useParams(); 
  
  const db = getFirestore();
  const itemCollection = db.collection("items");
  const itemId = itemCollection.where('id','==',product_id)

  useEffect(()=>{
    itemId.get().then((querySnapshot)=>{
      if(querySnapshot.size === 0){
        console.log('No results');
      }
      const temp = querySnapshot.docs.map(doc => doc.data())
      setProdu(temp[0])
    })
  },[product_id])


  return (
    <div className="parentElement">
          
        <Detail props={produ}/>
    </div>
  )
}

export default ItemDetailContainer
