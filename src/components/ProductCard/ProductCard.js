import React from "react";
import "./styles.css";
import StarRating from "../StarRating/StarRating";
export default function ProductCard(props) {
  return (
    <div>
      <img
        className="productImage"
        src={`${props.imgUrl}`}
        alt={`${props.title}`}
      />
      <p>{props.title}</p>
      <p>Price: € {props.price}</p>
      <StarRating stars={props.rating} />
    </div>
  );
}
