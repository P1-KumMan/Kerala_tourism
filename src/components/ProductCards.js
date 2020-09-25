import React from "react";
import "./ProductCards.css";
import ProductCardItem from "./ProductCardItem";

function ProductCards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ProductCardItem
              src="images/img-9.jpg"
              text="Kerala Backwater Packages"
              label="Adventure"
              path="/services"
            />
            <ProductCardItem
              src="images/img-2.jpg"
              text="Kerala Hill Station Packages"
              label="Luxury"
              path="/services"
            />
            <ProductCardItem
              src="images/img-8.jpg"
              text="Kerala Beach Packages"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <ProductCardItem
              src="images/img-3.jpg"
              text="Kerala Ayurveda Packages"
              label="Mystery"
              path="/services"
            />
            <ProductCardItem
              src="images/img-4.jpg"
              text="Kerala Gavi Packages"
              label="Adventure"
              path="/products"
            />
            <ProductCardItem
              src="images/img-8.jpg"
              text="South Indian Spiritual Tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
