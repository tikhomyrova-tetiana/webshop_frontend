import "./styles.css"
import React from "react";
import { NavLink, Link } from "react-router-dom";


const Footer = (props) => {

    const {id} = props
    return (
        <div className="footer">
            <div><NavLink to={"/"} ><span style={{color: "white"}}>OUR </span><span style={{color: "#8568FF"}}>SHOP</span></NavLink></div>
            <div>
                <div className="footer-list">
                    <h3>Categories</h3>
                    <div className="category-links"><Link to={`/category/${id}`} >Laptops & Computers</Link></div>
                    <div><Link to={`/category/${id}`} >Cameras & Photography</Link></div>
                    <div><Link to={`/category/${id}`} >Smart Phones & Tablets</Link></div>
                    <div><Link to={`/category/${id}`} >Video Games & Consoles</Link></div>
                    <div><Link to={`/category/${id}`} >Waterproof Headphones</Link></div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Footer