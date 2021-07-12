import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import {useParams} from 'react-router-dom'

function Products() {

    const {products} = useParams()

    return (
        <div>
        <p id="parra">Our collection for you</p>
            {products}
            <ItemListContainer/>
            
        </div>
    )
}

export default Products
