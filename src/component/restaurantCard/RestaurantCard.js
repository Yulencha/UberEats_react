import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const RestaurantCard = ({ title, img, index, type, price, time }) => {
  return (
    <NavLink
      className="col-sm-12 col-md-6 col-xl-4 restaurant"
      to={`/restaurant/${index}`}
    >
      <img src={img} alt={title} className="restaurant__img" />
      <div className="restaurant__title">{title}</div>
      <div className="restaurant__type">{`${price} • ${type}`}</div>
      <div className="restaurant__time">{time}</div>
    </NavLink>
  );
};

export default RestaurantCard;
