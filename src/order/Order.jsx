import { useEffect, useState } from "react"
import { searchMeals } from "../api/server"

export default function Order(){
    const [loading , setLoading ]= useState(true)
    const [mealsType , setMealsType] = useState("")

useEffect(() => {
    async function loadMeals() {
        const data = await searchMeals(mealsType);
        console.log(data);
        setMealsType(data.mealsType)       // { meals: [...] }
        }
    loadMeals();
    
    }, [mealsType]);

    return(
        <div>
            <div className="order">
            <h2>Make Order</h2>
            <form>
                <div>
                    <label htmlFor="OrderType">Order Type</label>
                    <select 
                        onChange={(e)=>{setMealsType(e.target.value)}}

                    name="OrderType" value={mealsType}>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Side">Side</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Beef">Beef</option>
                    </select>
                </div>
                <button type="submit">Add to Cart</button>
            </form>
        </div>
        <div className="recips">
            <h1>MENU</h1>
            <div>
                
            </div>
        </div>
    </div>
    )
}