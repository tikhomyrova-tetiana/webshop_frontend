import { useState } from "react";
import Star from "./Star";

function StarRating(props) {
  return (
    <span>
      {Array(5)
        .fill()
        .map((_, index) => (
          <Star key={index} filled={index < props.stars} />
        ))}
    </span>
  );
}
export default StarRating;
