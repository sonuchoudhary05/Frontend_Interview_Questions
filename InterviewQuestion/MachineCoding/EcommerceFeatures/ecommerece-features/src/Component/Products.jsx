import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import { addToCart, removeToCart } from "../redux/cartSlice";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const cart = useSelector((state) => state.Cart.cart);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      console.log("Data", data?.products);
      dispatch(setProducts(data?.products));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const currentPageHandler = (index) => {
    if (index >= 1 && index <= products.length / 10 && index !== currentPage) {
      setCurrentPage(index);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {products.length > 0 && (
        <div className="products">
          {products
            .slice(currentPage * 10 - 10, currentPage * 10)
            .map((product) => (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <span className="title">{product.title}</span>
                <div className="cartButtonContainer">
                  <button
                    className="cartButton"
                    onClick={() =>{
                        const inCart  = cart.find((item) => item.id === product.id);
                        if(!inCart){
                          dispatch(addToCart(product));
                        }
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="cartButton"
                    onClick={() => dispatch(removeToCart({ id: product.id }))} 
                  >
                    Remove to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => currentPageHandler(currentPage - 1)}
            className={currentPage > 1 ? "" : "button_disable"}
          >
            ⏮️
          </span>
          {[...Array(products.length / 10)].map((_, index) => (
            <span
              key={index + 1}
              onClick={() => currentPageHandler(index + 1)}
              className={currentPage === index + 1 ? "current__page" : ""}
            >
              {index + 1}
            </span>
          ))}
          <span
            onClick={() => currentPageHandler(currentPage + 1)}
            className={
              currentPage < products.length / 10 ? "" : "button_disable"
            }
          >
            ⏭️
          </span>
        </div>
      )}
    </div>
  );
};

export default Products;
