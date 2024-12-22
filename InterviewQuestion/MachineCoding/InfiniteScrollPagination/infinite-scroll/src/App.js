import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoding] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoding(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${currentPage * 10}`
      );
      const data = await response.json();
      setProducts(data.products);
      setCurrentPage(currentPage + 1);
      setLoding(false);
    } catch (error) {
      console.log("Gtetting an error while fetching the products", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
  const handleScroll = debounce(() => {
    if (
      (window.innerHeight + document.documentElement.scrollTop+300 > 
      document.documentElement.offsetHeight) && !loading
    ) {
      fetchProducts();
    }
  },100)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll",handleScroll)
  }, [handleScroll]);
  return (
    <div className="products">
      {products.length > 0 &&
        products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <span className="title">{product.title}</span>
          </div>
        ))}
         {loading && <div>Loading...</div>}
    </div>
  );
}

export default App;
