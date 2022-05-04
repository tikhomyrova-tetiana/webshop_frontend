import React from 'react'
import "./styles.css"
import axios from 'axios'
import {useState, useEffect} from 'react'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import Popup from '../Popup/Popup'
import StarRating from '../StarRating/StarRating'

function ProductDetail (props) {
    const {id} = props
    
    const [productDetail, setProductDetail] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const details = async () => {
            const detailsResponse = await axios.get(`http://localhost:4000/products/${id}`)
            setProductDetail(detailsResponse.data)
        }
        details()
    }, [])

    return productDetail ? (
        <div className="detailView">
           <div className='product-detail-img-container'>
            <img className="productDetailImg" src={productDetail.mainImage} alt="product"/>
           </div>
           <div className="details">
            <h1>{productDetail.title}</h1>
            <div className='twoElements'>
                <StarRating stars={productDetail.rating} />
                <h2>{productDetail.rating}</h2>
                <div>
                <button onClick={togglePopup}>Add review</button>
                {isOpen && <Popup
                content={<>
                    <h1>Add review</h1>
                    <h6>Name</h6>
                    <input></input>
                    <h6>Rating</h6>
                    <h6>Review</h6>
                    <input></input>
                </>}
                handleClose={togglePopup}
                />}
                </div>
            </div>
            <h2>{productDetail.price}</h2>
            <p>{productDetail.description}</p>
            <div className="twoElements">
                <button>Add to Cart</button>
                <button>Favorite</button>
            </div>
            <h4>Categories: </h4>
            <div className="shareIcons">Share  <BsFacebook /><BsInstagram /><BsTwitter /></div>
           </div>
        </div>
    ) : (
        <p>Wait..</p>
    )

}

export default ProductDetail