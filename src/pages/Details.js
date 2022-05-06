 import React from 'react'
 import {useParams} from 'react-router-dom'
 import ProductDetail from '../components/ProductDetails/ProductDetails'
 import ProductDescription from '../components/ProductDescription/ProductDescription'
import Banner from '../components/Banner/Banner'

 
function DetailsPage() {

    const {id} = useParams()



    return (
        <div>
            <Banner />
            <ProductDetail id={id}/>
            <ProductDescription id={id}/>
        </div>)
}

export default DetailsPage