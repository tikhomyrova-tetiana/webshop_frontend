import React from "react";
import "./styles.css";
import StarRating from "../StarRating/StarRating";
import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiZoomIn } from "react-icons/fi";

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="image-container">
        <NavLink to={`/details/${props.id}`}>
          <img
            className="product-image"
            src={`${props.imgUrl}`}
            alt={`${props.title}`}
          />
        </NavLink>
      </div>
      <div className="product-title">
        <NavLink to={`/details/${props.id}`}>
          <h3>{props.title}</h3>
        </NavLink>
        <div className="price-rating">
          <div>
            <p>€ {props.price}</p>
          </div>
          <div>
            <StarRating stars={props.rating} />
          </div>
        </div>
        <br />
        <div className="card-icons">
          <FiShoppingCart />
          <FiHeart />
          <FiZoomIn />
        </div>
      </div>
    </div>
  );
}
