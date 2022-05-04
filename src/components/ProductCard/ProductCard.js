import React from "react";
import "./styles.css";
import StarRating from "../StarRating/StarRating";
import { NavLink } from "react-router-dom";

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

        <div className="star-rating">
          <StarRating stars={props.rating} />
        </div>
      </div>
      <div className="product-title">
        <NavLink to={`/details/${props.id}`}>
          <h3>{props.title}</h3>
        </NavLink>
        <div className="price">
          <p>Price: € {props.price}</p>
        </div>
      </div>
    </div>
  );
}
