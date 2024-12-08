import React from "react";
import { ShoppingCartState } from "../context/context";
import StarRating from "./star-rating";

const Filters = () => {
  const { filterState, filterDispatch } = ShoppingCartState();
  const { byStock, byRating} = filterState;
  return (
    <div className="flex flex-col w-96 gap-2">
      <span className="font-bold">Filter Products</span>
      <span>
        <input type="radio" className="mr-2" id = "Ascending" name = "sort" 
        onChange={() => filterDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })}
        checked={filterState.sort === "lowToHigh" ? true : false} />
        <label htmlFor="Ascendind">Ascending</label>
      </span>
      <span>
        <input type="radio" className="mr-2" id = "Descending" name = "sort" 
        onChange={() => filterDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })}
        checked={filterState.sort === "highToLow" ? true : false} />
        <label htmlFor="Descending">Descending</label>
      </span>
      <span>
        <input type="checkbox" className="mr-2" id = "outofstock" name = "outofstock" 
        onChange={() => filterDispatch({ type: "FILTER_BY_STOCK", payload: !byStock })}
        checked={byStock} />
        <label htmlFor="Descending">Include of the stock</label>
      </span>
      <span className="flex items-center">
        <label className="pr-2">Rating: </label>
        <StarRating 
        rating={byRating}
        onChange={(rating) => filterDispatch({ type: "FILTER_BY_RATING", payload: rating })} />
      </span>
      <button
      className="bg-slate-500 text-white p-2 rounded"
        onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}
      >Clear Filters</button>
    </div>
  );
};

export default Filters;
