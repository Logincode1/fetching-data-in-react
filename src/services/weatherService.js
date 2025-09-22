const API_KEY = "a4aff10553e44c5c8f4145121252209";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (query) => {
  try {
    // &q=New York
    const queryParam = `&q=${query}`;
    const res = await fetch(BASE_URL + queryParam);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export { show };