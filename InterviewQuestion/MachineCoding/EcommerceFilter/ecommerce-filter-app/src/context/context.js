/* eslint-disable react/prop-types */

import {createContext, useContext, useEffect, useReducer} from "react";
import {filterReducer, shoppingCartReducer} from "./reducer";

const ShoppingCart = createContext();

const Context = ({children}) => {
  // products state
  const [state, dispatch] = useReducer(shoppingCartReducer, {
    products: [],
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byRating: 0,
    searchQuery: "",
  });

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();
    console.log("Data products", data.products);
    if (data && data.products) {
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: data.products,
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ShoppingCart.Provider
      value={{state, dispatch, filterState, filterDispatch}}
    >
      {children}
    </ShoppingCart.Provider>
  );
};

export const ShoppingCartState = () => {
  return useContext(ShoppingCart);
};

export default Context;