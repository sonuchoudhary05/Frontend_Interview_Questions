import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div>
      <Header /> {/* Always visible */}
      <Outlet /> {/* This renders the child route (Products, Cart, etc.) */}
    </div>
  );
};

export default AppLayout;
