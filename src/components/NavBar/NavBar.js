import "./styles.css"
import React from "react";
import { NavLink} from "react-router-dom";
import { BsFillPersonFill, BsBasket3Fill, BsHeartFill } from "react-icons/bs"

const NavBar = () => {
    return (
        <div className="container">
        <div className="menu">
            <div className="navLinks">
                <div><NavLink to={"/"} >OUR <span style={{color: "white"}}>SHOP</span></NavLink></div>
                <div><NavLink to={"/"} >Homepage</NavLink></div>
                <div><NavLink to={"/Shop"} >Shop</NavLink></div>
                <div><NavLink to={"/details/1"} >Details</NavLink></div>
            </div>
            <div className="inputNavBar"><input type="text" placeholder="search.."/></div>
        </div>
        <div className="icon-container">
            <button className="navbar-button"><NavLink className="login-link" to={`/login`}><BsFillPersonFill /></NavLink></button>
            <button className="navbar-button"><BsBasket3Fill /></button>
            <button className="navbar-button"><BsHeartFill /></button>
        </div>
        </div>
    )
}

export { NavBar };