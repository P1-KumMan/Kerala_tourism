import React from "react";
import "./ProductCards.css";
import ProductCardItem from "./ProductCardItem";

function ProductCards() {
  return (
    <div className="cards">
      <h1>Our Packages</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ProductCardItem
              src="images/Kerala_backwaters.jpg"
              text="Kerala Backwater Packages"
              label="Luxury"
              path="/services"
              money=" $ 300"
              days="2"
              place="Alappuzha"
            />
            <ProductCardItem
              src="images/hillstation.jpg"
              text="Kerala Hill Station Packages"
              label="Luxury"
              path="/services"
              money=" $ 450"
              days="5"
              place="Munnar"
            />
            <ProductCardItem
              src="images/kozhikode-beach.jpg"
              text="Kerala Beach Packages"
              label="Relaxation"
              path="/sign-up"
              money=" $ 500"
              days="3"
              place="Kovalam"
            />
          </ul>
          <ul className="cards__items">
            <ProductCardItem
              src="images/kerala-ayurveda.jpg"
              text="Kerala Ayurveda Packages"
              label="Wellness"
              path="/services"
              money=" $1000"
              days="7"
              place="Kozhikode"
            />
            <ProductCardItem
              src="images/kerala_gavi.jpg"
              text="Kerala Gavi Packages"
              label="Adventure"
              path="/products"
              money=" $ 500"
              days="4"
              place="Pathanamthitta"
            />
            <ProductCardItem
              src="images/temple.jpg"
              text="South Indian Spiritual Tour"
              label="Spiritual"
              path="/sign-up"
              money=" $ 1000"
              days="7"
              place="Mookambika"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
