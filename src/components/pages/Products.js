import React from "react";
import "../../App.css";
import "../Footer";
import Footer from "../Footer";
import ProductCards from "../ProductCards";

export default function Products() {
  return (
    <div>
      <h1 className="products">PRODUCTS</h1>
      <ProductCards />
      <Footer />
    </div>
  );
}
