 import React from 'react'
 import axios from 'axios'
 import {useState, useEffect} from 'react'
 import {useParams} from 'react-router-dom'
 import ProductDetail from '../components/ProductDetails/ProductDetails'
 import ProductDescription from '../components/ProductDescription/ProductDescription'

 
function DetailsPage() {

    const {id} = useParams()



    return (
        <div>
           <ProductDetail id={id}/>
           <ProductDescription id={id}/>
        </div>)
}

export default DetailsPage