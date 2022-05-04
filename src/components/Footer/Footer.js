import "./styles.css"
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"


const Footer = (props) => {

    const {id} = props
    return (
        <div className="footer">
            <div className="footer-logo"><NavLink to={"/"} ><span style={{color: "white"}}>OUR </span><span style={{color: "#8568FF"}}>SHOP</span></NavLink></div>
            <div className="lists">
                <div className="footer-list">
                    <h3>Categories</h3>
                    <div><Link to={`/category/${id}`} >Laptops & Computers</Link></div>
                    <div><Link to={`/category/${id}`} >Cameras & Photography</Link></div>
                    <div><Link to={`/category/${id}`} >Smart Phones & Tablets</Link></div>
                    <div><Link to={`/category/${id}`} >Video Games & Consoles</Link></div>
                    <div><Link to={`/category/${id}`} >Waterproof Headphones</Link></div>
                </div>
                <div className="footer-list">
                    <h3>My account</h3>
                    <div><Link to={`/`} >My account</Link></div>
                    <div><Link to={`/`} >Discount</Link></div>
                    <div><Link to={`/`} >Returns</Link></div>
                    <div><Link to={`/`} >Orders History</Link></div>
                    <div><Link to={`/`} >Order Tracking</Link></div>
                </div>
            </div>
            <div className="footer-list-follow">
                    <h3>Follow us</h3>
                    <div className="footer-icons"><BsFacebook style={{color:"white"}}/><BsInstagram /><BsTwitter /></div>
            </div>
        </div>
    )
}

export default Footer