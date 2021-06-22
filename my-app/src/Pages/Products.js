import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer'
import {useParams} from 'react-router-dom'

function Products() {

    const {products} = useParams()

    return (
        <div>
            {products}
            <ItemDetailContainer/>
            
        </div>
    )
}

export default Products
