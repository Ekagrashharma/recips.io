const BASE_URl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function searchMeals(query: string) {
  const response = await fetch(
    `${BASE_URL}/search.php?s=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch meals");
  }

  return response.json();
}

export interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
}