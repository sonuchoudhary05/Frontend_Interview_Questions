import React from "react";
import {useState, useEffect} from "react";
import "./styles.css";
import SuggetionsList from "./suggetions-list";

const Autocomplete = ({
  placeholder,
  fetchSuggestions,
  dataKey,
  customLoding,
  onSelect,
  onChange,
  onBlur,
  onFocus,
  customStyles,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };
  const getSuggestions = async (value) => {
    setError(null);
    setLoding(true);
    try {
      let result;
      if (fetchSuggestions) {
        result = await fetchSuggestions(value);
        setSuggestions(result);
      }
    } catch (error) {
      setError(error);
      setSuggestions([]);
      console.log("Error While Fetching Suggestions : ", error);
    } finally {
      setLoding(false);
    }
  };
  useEffect(() => {
    if(inputValue.length > 1){
        getSuggestions(inputValue);
    }
    else{
        setSuggestions([]);
    }
  },[inputValue]);
  console.log("Suggestions : ", suggestions);
  const handleSuggestionsList = (suggestion) => {
    setInputValue(suggestion[dataKey]);
    onSelect(suggestion);
    setSuggestions([]);
  }

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        styles={customStyles}
        onChange={handleInputChange}
      />
      {
        (suggestions.length > 0 || loding || error) && (
          <ul>
              {error && <div className="error">{error}</div>}
              {loding && <div className="loding">{customLoding}</div>}
              <SuggetionsList 
              dataKey={dataKey}
              suggestions= {suggestions}
              highlights={inputValue}
              onSuggestionsClick={handleSuggestionsList}
               />
          </ul>
        )
      }
    </div>
  );
};

export default Autocomplete;
