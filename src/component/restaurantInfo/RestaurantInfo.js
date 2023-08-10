import React from "react";
import "./style.css";
import BtnBack from "../btnBack/BtnBack";

const RestaurantInfo = ({ title, img, type, price, time }) => {
  return (
    <div className="restaurant-info">
      <img src={img} alt={title} className="restaurant-info__img" />
      <div className="restaurant-info__container">
        <div className="container">
          <BtnBack />
          <div className="restaurant-info__card ">
            <div className="restaurant-info__title">{title}</div>
            <div className="restaurant-info__wrap">
              <div className="restaurant-info__type">{`${price} • ${type}`}</div>
              <div className="restaurant-info__time">{time}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
