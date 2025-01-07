import React, { useEffect } from "react";
class LruCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value); // Move to end
      return value;
    } else {
      return null;
    }
  }
  set(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    if (this.cache.size === this.capacity) {
      this.cache.delete(this.cache.keys().next().value); // Remove first item
    }
    this.cache.set(key, value);
  }
}

const TypeHead = () => {
  const [search, setSearch] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const inputRef = React.useRef(null);
  const cache = new LruCache(5);

  const fetchSuggestions = async (searchValue) => {
    console.log("Cache Value is : ", cache);
    if (cache.get(searchValue)) {
      setSuggestions(cache.get(searchValue));
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchValue}`
      );
      const data = await response.json();
      setSuggestions(data);
      cache.set(searchValue, data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Getting an error while fetching suggestions", error);
    }
  };
  const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  const handleInputChange = (e) => {
    inputRef.current = e.target.value;
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (search.length > 2) {
      debounce(fetchSuggestions(search), 500);
    }
  },[search]);
  return (
    <div className="autocomplete">
      <input type="text" value={search} onChange={handleInputChange} style = {{
        width: "30%"
      }} />
      {loading && <div>Loading...</div>}
      {suggestions?.recipes?.length > 0 && (
        <ul className="suggestions">
          {suggestions?.recipes.map((suggestion) => (
           <li key={suggestion.id}>
           {suggestion.name.split(new RegExp(`(${search})`, "gi")).map((part, index) =>
             part.toLowerCase() === search.toLowerCase() ? (
               <span key={index} style={{ color: "blue" }}>
                 {part}
               </span>
             ) : (
               part
             )
           )}
         </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TypeHead;
