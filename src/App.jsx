import { useEffect, useState } from "react";
import { searchMeals } from "./api/MealsApi";

export default function Home() {
  const [meals, setMeals] = useState([]);

  // useEffect(() => {
  //   async function loadMeals() {
  //     try {
  //       const data = await searchMeals("beef");

  //       setMeals(data.meals ?? []);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }

  //   loadMeals();
  // }, []);

  return (
    <>
    <header>
      <h1>Recips.IO</h1>
    </header>
    <br />
    <div>
      <select name="" id>
        <option value="">Meals Category </option>
      </select>
    </div>
    <div className="recips">
      <h2>recip name</h2>
      <div><img src="" alt="recip image" /></div>
      <div className="recips context">
        <span>Category name</span>
        <span>Origin</span>
      </div>
      <h3>Ingredients</h3>
      <div className="ingredentGrid">
        <span>Item name</span>
        <span>Item measure</span>
      </div>
      <h3>Intruction</h3>
      <p>intruction content</p>
      <button>Youtube Link</button>
    </div>
    </>
  );
}