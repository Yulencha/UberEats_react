import React, { useMemo, useState } from "react";
import { restaurants } from "../helpers/RestaurantsList";
import RestaurantCard from "../component/restaurantCard/RestaurantCard";

const Main = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRestaurants = useMemo(() => {
    const searchWords = searchQuery.toLowerCase().split(" ");
    return restaurants.filter((restaurant) =>
      searchWords.every(
        (word) =>
          restaurant.title.toLowerCase().includes(word) ||
          restaurant.type.toLowerCase().includes(word)
      )
    );
  }, [searchQuery]);

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Поиск по ресторанам и кухням"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="title">Рестораны в Москве</div>

      <ul className="restaurants row gx-3 gy-5">
        {filteredRestaurants.map((restaurant, index) => {
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
