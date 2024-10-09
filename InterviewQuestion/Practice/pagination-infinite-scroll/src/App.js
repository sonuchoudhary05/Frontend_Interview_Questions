import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  /*const throttle = (func, duration) => {
    let last = 0;
    return function(...args){
      const now = new Date().getTime();
      if(now - last < duration){
        return;
      }
      last = now;
      return func(...args);
    }
  }
    */
  const debouncing = (func, delay) => {
    let timer;
    return function(...args){
      if(timer){
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func(...args);
      },delay);
  }}

  const fectchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${currentPage * 10}`
      );
      const products = await response.json();
      console.log("Peoducts : ", products);
      setProducts(products?.products);
      setCurrentPage(currentPage + 1);
      setLoading(false);
    } catch (error) {
      console.log("Getting an Error While Fetching Products : ", error);
    }
  };
  useEffect(() => {
    fectchProducts();
  }, []);

  const handleScroll = debouncing(() => {
    if (
      (window.innerHeight + document.documentElement.scrollTop+300 > 
      document.documentElement.offsetHeight) && !loading
    ) {
      fectchProducts();
    }
  },500)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => { window.removeEventListener("scroll", handleScroll)}
  }, [handleScroll]);
  /*const handlePagination = (index) => {
    if (index >= 1 && index <= products.length / 10 && index !== currentPage) {
      setCurrentPage(index);
    }
  }
    */

  return (
    <div>
      <div className="products">
        {products.length > 0 &&
          products.map((product) => (
              <div className="products__single" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <span className="title">{product.title}</span>
              </div>
            ))}
      </div>
      {loading && <div>Loading...</div>}
       {/*
      <div className="products">
        {products.length > 0 &&
          products
            .slice(currentPage * 10 - 10, currentPage * 10)
            .map((product) => (
              <div className="products__single" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <span className="title">{product.title}</span>
              </div>
            ))}
      </div>
      <div className="button-aligment">
          <div className= {currentPage ===1 ? "disable" : ""} onClick={() => handlePagination(currentPage-1)}>back</div>
          {
            [...Array(products.length/10)].map((_,index) => (
              <div key={index+1} className= {currentPage === index+1 ? "current__page": ""} onClick={() => handlePagination(index+1)}>{index+1}</div>
            ))
          }
          <div className= {currentPage ===10 ? "disable" : ""} onClick={() => handlePagination(currentPage+1)}>next</div>
        </div>
        {loading && <div>Loading...</div>}
      </div>*/}
    </div>
  );
}

export default App;
