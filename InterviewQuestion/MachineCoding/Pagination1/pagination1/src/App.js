import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = async () => {
    try{
      const response = await fetch('https://dummyjson.com/products?limit=100');
      const data = await response.json();
      setProducts(data.products);
    }
    catch(error){
      console.log("Getting an error while fetching the products", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const currentPageHandler = (index) => {
    if(currentPage >=1 && currentPage <= products.length/10 && index !== currentPage){
      setCurrentPage(index);
    }
  }
  return (
    <div className="products">
      {
        products.length > 0 && (
          products.slice((currentPage*10 - 10), currentPage * 10).map((product) => (
            <div key={product.id} className="product">
              <img src={product.thumbnail} alt={product.name} />
              <h3>{product.title}</h3>
            </div>
          ))
        )
      }
      {
        products.length > 0 && (
          <div className="pagination">
           <span onClick={() => currentPageHandler(currentPage-1)} className={currentPage > 1 ? "": "disable"}>back</span>
           {
            [...Array(products.length/10)].map((_,index) => (
              <span key = {index+1} onClick={() => currentPageHandler(index+1)} className= {currentPage === index+1 ? "current__page": ""}>{index+1}</span>
            ))
          }
           <span onClick={() => currentPageHandler(currentPage+1)} className={currentPage < products.length/10 ? "": "disable"}>next</span>
          </div>
        )
      }
    </div>
  );
}

export default App;
