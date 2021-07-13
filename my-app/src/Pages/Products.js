import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import {useParams} from 'react-router-dom'

function Products() {

    const {products} = useParams()

    return (
        <div>
        <p id="parra">Nuestros productos</p>
            {products}
            <ItemListContainer/>
            
        </div>
    )
}

export default Products
