
export const fetchUsers = async () => {
  const res = await fetch("https://randomuser.me/api/?results=15");
  const data = await res.json();
  return data.results;
};



const API_KEY = "d4a70dc272b1e1b13bce66e513905e85";

export const fetchWeather = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!res.ok) throw new Error("Failed to fetch weather");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Weather fetch error:", error);
    return null;
  }
};