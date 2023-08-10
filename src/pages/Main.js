import React from "react";
import { restaurants } from "../helpers/RestaurantsList";
import RestaurantCard from "../component/restaurantCard/RestaurantCard";

const Main = () => {
  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Поиск по ресторанам и кухням"
          autoComplete="off"
        />
      </div>
      <div className="title">Рестораны в Москве</div>

      <ul className="restaurants row gx-3 gy-5">
        {restaurants.map((restaurant, index) => {
          return (
            <RestaurantCard
              key={restaurant.title}
              title={restaurant.title}
              img={restaurant.img}
              index={index}
              type={restaurant.type}
              price={restaurant.price}
              time={restaurant.time}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
