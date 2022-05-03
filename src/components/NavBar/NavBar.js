import "./styles.css"
import React from "react";
import { NavLink} from "react-router-dom";
import { BsFillPersonFill, BsBasket3Fill, BsHeartFill } from "react-icons/bs"

const NavBar = () => {
    return (
        <div className="container">
        <div className="green-box">
            <div className="navLinks">
                <div><NavLink to={"/"} >OUR SHOP</NavLink></div>
                <div><NavLink to={"/"} >Homepage</NavLink></div>
                <div><NavLink to={"/Shop"} >Shop</NavLink></div>
                <div><NavLink to={"/details/1"} >Details</NavLink></div>
            </div>
            <div className="inputNavBar"><input type="text" placeholder="search.."/></div>
        </div>
        <div className="red-box"><BsFillPersonFill /><BsBasket3Fill /><BsHeartFill /></div>
        </div>
    )
}

export { NavBar };