import React from 'react'
import {useParams} from 'react-router-dom'

function ProductosId() {
    let {ProductsId} = useParams()

    return (
        <div>
            <h3>{ProductsId}</h3>
        </div>
    )
}

export default ProductosId
