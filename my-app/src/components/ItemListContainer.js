import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'



const getItems = () => { 
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve({
            title:"Zapatillas",
            price: 25.5,
            description: "Un par de colección",
            img:""
        })},2000)
    })
}
export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    useEffect(() => {
        getItems().then((res)=> setItem(res))
        return;
    }, [])
    
    return <ItemList item={item} />
    }