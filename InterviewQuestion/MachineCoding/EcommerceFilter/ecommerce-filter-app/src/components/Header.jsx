import React from "react";
import { ShoppingCartState } from "../context/context";

const Header = () => {
  const {
    filterState: { searchQuery },
    filterDispatch,
  } = ShoppingCartState();
  return (
    <div className="h-5 flex items-center justify-between">
      <p className="text-2xl font-mono">RoadSideCoder Store</p>
      <input
        type="text"
        placeholder="Search a products..."
        className="p-2"
        value={searchQuery}
        onChange={(e) =>
          filterDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value })
        }
      />
    </div>
  );
};

export default Header;
