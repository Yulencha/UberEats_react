import React from "react";
import "./style.css";

const DishCard = ({ title, img, description, price }) => {
  return (
    <li className=" col-sm-12 col-md-12 col-lg-6">
      <div className="dish">
        <div className="dish__info">
          <div className="dish__wrap">
            <div className="dish__title">{title}</div>
            <div className="dish__description">{description}</div>
          </div>
          <div className="dish__price">{price}</div>
        </div>

        <img src={img} alt={title} className="dish__img" />
      </div>
    </li>
  );
};

export default DishCard;
