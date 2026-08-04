const API_KEY = import.meta.env.VITE_CURRENTS_API_KEY;

const BASE_URL = "https://api.currentsapi.services/v1";

export async function getTopHeadlines(category = "", search = "") {

  let url = "";

  if (search.trim()) {
    url = `${BASE_URL}/search?keywords=${search}&language=en&apiKey=${API_KEY}`;
  }
  else if (category) {
    url = `${BASE_URL}/latest-news?category=${category}&language=en&apiKey=${API_KEY}`;
  }
  else {
    url = `${BASE_URL}/latest-news?language=en&apiKey=${API_KEY}`;
  }
//   await new Promise(resolve => setTimeout(resolve, 1000));

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch API");
  }

  const data = await response.json();

  return data.news;
}