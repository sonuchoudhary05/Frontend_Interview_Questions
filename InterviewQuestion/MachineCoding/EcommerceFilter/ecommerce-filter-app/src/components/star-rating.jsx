/* eslint-disable react/prop-types */
import {useState} from "react";

const StarRating = ({rating, onChange, size = 5}) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarHover = (hoveredRating) => {
    if (onChange) setHoveredRating(hoveredRating);
  };

  return (
    <div className="star-rating">
      {Array(size)
        .fill("")
        .map((_, index) => {
          const starValue = index + 1;
          let starClass = "star";

          if (hoveredRating >= starValue) {
            starClass += " hover";
          } else if (rating >= starValue) {
            starClass += " active";
          }
          return (
            <span
              key={index}
              className={starClass}
              onClick={() => onChange(starValue)}
              onMouseEnter={() => {
                if (onChange) handleStarHover(starValue);
              }}
              onMouseLeave={() => {
                if (onChange) handleStarHover(0);
              }}
            >
              &#9733;
            </span>
          );
        })}
    </div>
  );
};

export default StarRating;