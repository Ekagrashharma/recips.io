import { useEffect, useState } from "react";
import { categoryList, searchMeals } from "./api/MealsApi";

export default function Home() {

  const [mealsCategory, setmealsCategory] = useState([])
  const [categoryType , setCategoryType] = useState()
  const [mealRecips, setMealRecips] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(()=>{
    async function loadCategory() {
      try{
        const data = await categoryList()
        setmealsCategory(data)
      }catch (err) {
      console.error(err);
    }}
    loadCategory()
    setloading(false)
  },[])
  



  return (
    <>
      <header>
        <h1>Recips.IO</h1>
      </header>
      <br />
      <div>
        <select  
          value={categoryType}
          onChange={(e)=>(setCategoryType(e.target.value))}
        >
          {mealsCategory.map((category) => (
            <option
              key={category.idCategory}
              value={category.strCategory}
            >
              {category.strCategory}
            </option>
            ))}
        </select>
      </div>
      <div className="recips">
        <h2>recip name</h2>
        <div>
          <img  alt="recip image" />
        </div>
        <div className="recips context">
          <span>Category name</span>
          <span>Origin</span>
        </div>
        <h3>Ingredients</h3>
        <div className="ingredentGrid">
          <span>Item name</span>
          <span>Item measure</span>
        </div>
        <div>
          <h3>Intruction</h3>
          <p>intruction content</p>
          <button>Youtube Link</button>
        </div>
      </div>
    </>
  );
}
