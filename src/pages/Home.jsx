import React from "react";
import Header from "../components/Header";
import ProductsCard from "../components/ProductsCard";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <h2 className="my-heding">Products</h2>
      <ProductsCard />
      <div className="text-center my-4">
        <Link className="my-btn" to="/products">
          See more
        </Link>
      </div>
    </div>
  );
}
