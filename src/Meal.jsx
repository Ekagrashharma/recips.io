import { useEffect, useState } from "react";
import { searchMeals } from "./api/server";

function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMeals() {
      const data = await searchMeals("egg");
      setMeals(data.meals ?? []);
    }

    loadMeals();
  }, []);

  return (
    <div>
      {meals.map((meal) => (
        <div key={meal.idMeal}>
          <img src={meal.strMealThumb} width={200} />
          <h2>{meal.strMeal}</h2>
          <p>{meal.strCategory}</p>
        </div>
      ))}
    </div>
  );
}

export default Meals;