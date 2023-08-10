import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { Navigate, useParams } from "react-router-dom";
import { restaurants } from "../helpers/RestaurantsList";
import RestaurantInfo from "../component/restaurantInfo/RestaurantInfo";
import FoodCategory from "../component/foodCategory/FoodCategory";

const Restaurant = () => {
  const { id } = useParams();
  const restaurant = restaurants[id];

  // const handleScroll = (event) => {
  //   event.stopPropagation();
  //   const clickedElement = event.target;

  //   const navigation = clickedElement.classList.contains("restaurant__nav-item")
  //     ? clickedElement.parentNode
  //     : clickedElement;

  //   navigation.scrollBy({
  //     left: event.deltaY < 0 ? -30 : 30,
  //   });
  // };

  return (
    <>
      <RestaurantInfo
        key={restaurant.title}
        title={restaurant.title}
        img={restaurant.imgBig}
        type={restaurant.type}
        price={restaurant.price}
        time={restaurant.time}
      />

      <div className="container">
        <nav className="restaurant__nav">
          <NavLink to={`snacks`} className="restaurant__nav-item">
            Закуски
          </NavLink>
          <NavLink to={`salads`} className="restaurant__nav-item">
            Салаты
          </NavLink>
          <NavLink to="./soups" className="restaurant__nav-item">
            Супы
          </NavLink>

          <NavLink to="./main_dishes" className="restaurant__nav-item">
            Горячие блюда
          </NavLink>
          <NavLink to="./side_dishes" className="restaurant__nav-item">
            Гарниры
          </NavLink>
          <NavLink to="./desserts" className="restaurant__nav-item">
            Десерты
          </NavLink>
        </nav>
      </div>
      <div className="restaurant__nav-border"></div>
      <Routes>
        <Route path="" element={<Navigate to="snacks" />} />

        <Route
          path="/:category"
          element={<FoodCategory menu={restaurant.menu} />}
        />
      </Routes>
    </>
  );
};

export default Restaurant;
