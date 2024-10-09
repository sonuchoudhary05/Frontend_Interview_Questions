import React, { useContext, createContext,useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { CartReducer } from './reducer';


const CartContext = createContext();

const Context = ({children}) => {
    const products = [...Array(20)].map(() => ({
        id: Math.random().toString(16).slice(2),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(), // Updated from faker.random.image()
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]), // Updated from faker.random.arrayElement
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]) // Updated from faker.random.arrayElement
    }));
    
    const [state, dispatch] = useReducer(CartReducer, {
        products,
        cart: []
    });
    return (
        <CartContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default Context;
export const CartState = () => {
    return useContext(CartContext);
}