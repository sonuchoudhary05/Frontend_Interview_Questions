import React from 'react';
import { CartState } from '../context/context';
import SingleProduct from './SingleProduct';
import Filter from './Filter';
import "./style.css";

const Home = () => {
    const {state:{products}}= CartState();
  return (
    <div className='home'>
        <Filter />
      <div className='productContainer'>
        {products.map((product) => {
            return <SingleProduct product={product} key={product.id} />
        })}
      </div>
    </div>
  )
}

export default Home
