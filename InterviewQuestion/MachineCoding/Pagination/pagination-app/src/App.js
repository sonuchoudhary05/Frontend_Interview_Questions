import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchProducts = async () => {
    try{
      const response = await fetch('https://dummyjson.com/products?limit=100');
      const data = await response.json();
      setProducts(data?.products);
      console.log(data?.products);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts();
  },[]);
  const currentPageHandler = (index) => {
    if(index >=1 && index <= products.length/10 && index !== currentPage){
      setCurrentPage(index);
    }
  }

  return (
    <div>
      {products.length > 0 &&  (
        <div className='products'>  
          {products.slice(currentPage*10-10,currentPage*10).map((product) => (
            <div className='products__single' key= {product.id}>
              <img src = {product?.thumbnail} alt = {product?.title}/>
              <span>{product.title}</span>
            </div>
          )
          )}
        </div>
      )}
      {products.length > 0 && ( 
        <div className="pagination">
          <span onClick={() => currentPageHandler(currentPage-1)} className={currentPage > 1 ? "" : "button_disable"}>⏮️</span>
          {
            [...Array(products.length/10)].map((_,index) => (
              <span key = {index+1} onClick={() => currentPageHandler(index+1)} className= {currentPage === index+1 ? "current__page": ""}>{index+1}</span>
            ))
          }
          <span onClick={() => currentPageHandler(currentPage+1)} className={currentPage < (products.length/10) ? "" : "button_disable"}>⏭️</span>
        </div>
      )}
    </div>
  );
}

export default App;
