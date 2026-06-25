import { useState } from "react"

export default function Order(){
    const [OrderType, setOrderType] = useState("Breakfast")
    console.log(OrderType)

    return(
        <div className="order">
            <h2>Make Order</h2>
            <form>
                <div>
                    <label htmlFor="OrderType">Order Type</label>
                    <select 
                        onChange={(e)=>{setOrderType(e.target.value)}}

                    name="OrderType" value={OrderType}>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Side">Side</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Beef">Beef</option>
                    </select>
                </div>
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    )
}