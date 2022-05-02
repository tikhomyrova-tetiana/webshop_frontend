import "./styles.css"
import React from "react";
import { NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container">
        <div className="green-box">
            <div>OUR SHOP</div>
            <div><NavLink to={"/"} >Homepage</NavLink></div>
            <div><NavLink to={"/Shop"} >Shop</NavLink></div>
            <div><NavLink to={"/details/1"} >Details</NavLink></div>
            <div><input type="text" placeholder="search.."/></div>
        </div>
        <div className="red-box">Red box</div>
        </div>
    )
}

export { NavBar };