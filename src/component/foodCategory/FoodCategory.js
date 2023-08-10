import React from "react";
import "./style.css";
import { useParams } from "react-router-dom/dist";
import DishCard from "../dishCard/DishCard";

const FoodCategory = ({ menu }) => {
  const { category } = useParams();
  const categoryData = menu.find((item) => item.category === category);
  const items = categoryData.items;

  return (
    <div className="container">
      <div className="category">{categoryData.categoryTitle}</div>

      <div className="category__dishes">
        {categoryData && (
          <ul className="dishes row gx-3">
            {items.map((item, index) => {
              return (
                <DishCard
                  key={index}
                  title={item.title}
                  img={item.img}
                  description={item.description}
                  price={item.price}
                />
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FoodCategory;
