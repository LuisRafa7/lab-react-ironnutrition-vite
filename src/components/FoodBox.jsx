import React from "react";

function FoodBox({ foods, removeFood }) {
  const deleteFood = (id) => {
    removeFood(id);
  };

  return foods.map((oneFood) => {
    return (
      <div className="oneFood" key={oneFood.id}>
        <p style={{ textTransform: "uppercase" }}>{oneFood.name}</p>

        <img src={oneFood.image} />

        <p>Calories: {oneFood.calories}</p>
        <p>Servings: {oneFood.servings}</p>

        <p>
          <b>Total Calories: {oneFood.servings * oneFood.calories} </b> kcal
        </p>

        <button onClick={() => deleteFood(oneFood.id)}>Delete</button>
      </div>
    );
  });
}

export default FoodBox;
