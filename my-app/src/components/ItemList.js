import React from 'react'
import image1 from '../assets/imagen1.jpg'
import Item from './Item'


function ItemList() {
    const items = [{
        title: "Jordan 1 Chicago",
        precio: 20,
        id : 1,
    },{
        title: "Jordan retro 12",
        precio: 30,
        id: 2,
    },{
        title: "Jordan retro 11",
        precio: 30,
        id: 3,
    }];
    return (
        <div>
            {
                items.map((post, index)=>{
                    return (
                        <div>
                            <Item image={image1} id={index} title={post.title} precio={post.precio}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList

