import React from "react";
import "./App.css";
import StarRating from "./component/StarRating/starRating";

function App() {
  const [currentRating, setCurrentRating] = React.useState(3);
  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating);
  };
  return (
    <div>
      <h2>Star Rating</h2>
      <StarRating size={5} currentRating={currentRating} onChange={handleRatingChange} />
      <p>Current Rating : {currentRating}</p>
    </div>
  );
}

export default App;
