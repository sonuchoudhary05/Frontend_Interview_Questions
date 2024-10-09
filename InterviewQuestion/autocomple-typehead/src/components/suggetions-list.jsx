import React from "react";

const SuggetionsList = ({
  suggestions,
  highlights,
  dataKey,
  onSuggestionsClick,
}) => {
  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return(
        <span>
            {parts.map((part, index) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
                <span key={index} style={{ fontWeight: "bold" }}>
                {part}
                </span>
            ) : (
                part
            )
            )}
        </span>
    )
  };
  return (
    <>
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          onClick={() => onSuggestionsClick(suggestion)}
          className="suggestion-item"
        >
            {console.log("suggestion",suggestion)}
          {getHighlightedText(suggestion?.name, highlights)}
        </li>
      ))}
    </>
  );
};

export default SuggetionsList;
