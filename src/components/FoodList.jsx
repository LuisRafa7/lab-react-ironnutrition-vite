import React from "react";
import foodsJson from "../foods.json";
import { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  const removeFood = (id) => {
    const newArr = foods.filter((oneFood) => oneFood.id !== id);
    setFoods(newArr);
  };

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div>
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addFood} />
      <div className="flex">
        <FoodBox foods={foods} removeFood={removeFood} />
      </div>
    </div>
  );
}

export default FoodList;
