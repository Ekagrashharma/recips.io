const BASE_URL = "https://www.themealdb.com/api/json/v1/1";
//https://www.themealdb.com/api/json/v1/1/search.php?s=chicken for meals 
const CATEGORY_LIST = "https://www.themealdb.com/api/json/v1/1/categories.php"  //for categories list 


export async function searchMeals(query) {
  const response = await fetch(
    `${BASE_URL}/search.php?s=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch meals");
  }

  const data = await response.json();

  return data;
}

export async function categoryList() {
  const response = await fetch(CATEGORY_LIST)
  if (!response.ok){
    throw new Error("failed to fetch category list")
  }

  const data = await response.json()
  console.log(data.categories)
  return data.categories;
}