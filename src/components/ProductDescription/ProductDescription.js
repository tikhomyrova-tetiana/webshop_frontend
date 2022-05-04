import React from 'react'
import "./styles.css"
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

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
        <div className="descriptView">
          <div className="descriptMenu">
            <div><Link to={`/details/${id}`}>Description</Link></div>
            <div><Link to={`/details/${id}`}>Additional info</Link></div>
            <div><Link to={`/details/${id}`}>Reviews</Link></div>
          </div>
           <p>{productDetail.description}</p>
        </div>
    ) : (
        <p>Wait..</p>
    )
}

export default ProductDescription