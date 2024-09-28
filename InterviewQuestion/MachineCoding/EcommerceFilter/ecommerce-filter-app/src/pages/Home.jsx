import {useMemo, useState} from "react";
import {ShoppingCartState} from "../context/context";
import Pagination from "../components/Pagination";
import StarRating from "../components/star-rating";
//import Filters from "../components/filters";

const Home = () => {
  const [page, setPage] = useState(1);

  const {
    state: {products},
    filterState: {sort, byStock, byRating, searchQuery},
  } = ShoppingCartState();
  console.log("Products", products);

  const filteredProducts = useMemo(() => {
    let filteredProducts = products;

    if (sort) {
      filteredProducts = filteredProducts.sort((a, b) => {
        return sort === "lowToHigh" ? a.price - b.price : b.price - a.price;
      });
    }

    if (!byStock) {
      filteredProducts = filteredProducts.filter((prod) => prod.inStock);
    }

    if (byRating) {
      filteredProducts = filteredProducts.filter(
        (prod) => prod.rating >= byRating
      );
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setPage(1);

    return filteredProducts;
  }, [sort, byStock, byRating, searchQuery, products]);


  return (
    <div>
      <div className="py-9 flex">
        {/*<Filters />*/}
        {/* Products */}
        {products.length > 0 && (
          <div className="products w-full">
            {products?.slice(page * 10 - 10, page * 10).map((prod) => {
              return (
                <span className={`products__single`} key={prod.id}>
                  <img src={prod.thumbnail} alt={prod.title} />
                  <span>{prod.title}</span>
                  <hr />
                  <span>$ {prod.price}</span>
                  {<StarRating rating={prod.rating} />}
                </span>
              );
            })}
          </div>
        )}
      </div>

      {products.length > 0 && (
        <Pagination products={products} page={page} setPage={setPage} />
      )}
    </div>
  );
};

export default Home;