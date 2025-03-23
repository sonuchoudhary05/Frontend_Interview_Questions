import React from "react";
import Products from "./Products";
import { NavLink, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="h5 flex items-center justify-between border-b-2 border-gray-200 p-4 mt-0">
        <NavLink to="/" className="text-2xl font-mono">
          Flipkart
        </NavLink>
        <input type="text" placeholder="Search the products...." />
        <button onClick={() => navigate("/cart")}>Cart </button>
      </nav>
      <Products />
    </div>
  );
};

export default Header;
