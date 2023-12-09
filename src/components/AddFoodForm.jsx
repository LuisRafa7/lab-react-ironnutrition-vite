import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddFoodForm({ addFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleImageInput = (e) => {
    setImage(e.target.value);
  };

  const handleCaloriesInput = (e) => {
    setCalories(e.target.value);
  };

  const handleServingsInput = (e) => {
    setServings(e.target.value);
  };

  const createNewFood = (e) => {
    e.preventDefault();
    const newFood = { id: uuidv4(), name, image, calories, servings };
    addFood(newFood);
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <>
      <h2>Add New Food</h2>
      <form onSubmit={(e) => createNewFood(e)}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />
        <br />
        <label htmlFor="image">ImageUrl</label>
        <br />
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleImageInput}
        />
        <br />
        <label htmlFor="calories">Calories</label>
        <br />
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />
        <br />
        <label htmlFor="servings">Servings</label>
        <br />
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServingsInput}
        />
        <br />
        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default AddFoodForm;
