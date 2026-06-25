
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function searchMeals(query) {
  const response = await fetch(
    `${BASE_URL}/search.php?s=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch meals");
  }return response.json()
}
