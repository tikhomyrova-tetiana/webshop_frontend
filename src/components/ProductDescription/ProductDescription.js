import React from 'react'
import "./styles.css"
import axios from 'axios'
import {useState, useEffect} from 'react'

function ProductDescription(props) {

    const {id} = props
    
    const [productDetail, setProductDetail] = useState(null)

    useEffect(() => {
        const details = async () => {
            const detailsResponse = await axios.get(`http://localhost:4000/products/${id}`)
            setProductDetail(detailsResponse.data)
        }
        details()
    }, [])

    return productDetail ? (
        <div>
           <h1>{productDetail.description}</h1>
        </div>
    ) : (
        <p>Wait..</p>
    )
}

export default ProductDescription