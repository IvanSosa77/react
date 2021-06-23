import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import {useParams} from 'react-router-dom'

function Products() {

    const {products} = useParams()

    return (
        <div>
            {products}
            <ItemListContainer/>
            
        </div>
    )
}

export default Products
