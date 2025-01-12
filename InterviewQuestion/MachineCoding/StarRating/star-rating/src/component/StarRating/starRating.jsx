import React from "react";
const StarRating = ({ size, currentRating, onChange }) => {
  const [hoverRating, setHoverRating] = React.useState(0);
  const handleStarHover = (newRating) => {
    setHoverRating(newRating);
    onChange(newRating);
  };
  return (
    <div className="start-rating">
      {Array(size)
        .fill("")
        .map((_, index) => (
          <span
            key={index}
            className="star"
            style={{
              color: index < (hoverRating || currentRating) ? "yellow" : "gray",
            }}
            onMouseEnter={() => handleStarHover(index + 1)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => onChange(index + 1)}
          >
            ★
          </span>
        ))}
    </div>
  );
};

export default StarRating;
