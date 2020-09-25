import React from "react";
import { Link } from "react-router-dom";

function ProductCardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Travel " src={props.src} />
          </figure>
          <div className="cards__item__info">
            <div className="star">
              <i class="fas fa-star"></i>
              <span>8.0 Superb</span>
            </div>
            <h5 className="cards__item__text">{props.text}</h5>
            <div class="place-cap-bottom">
              <p className="dolor">
                {props.money}
                <span> / Per Person</span>
              </p>
              <ul>
                <li>
                  <i class="far fa-clock"></i>
                  {props.days} Days
                </li>
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  {props.place}
                </li>
              </ul>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ProductCardItem;
