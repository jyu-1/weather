import { user } from "./user";
export { displayWeather };

function displayWeather() {
    const city = document.querySelector(".city");
    const cTemp = document.querySelector(".current-temp");
    const condition = document.querySelector(".condition");
    const todayHigh = document.querySelector(".high");
    const todayLow = document.querySelector(".low");
    const humidity = document.querySelector(".humidity");
    const sunrise = document.querySelector(".sunrise");
    const sunset = document.querySelector(".sunset");
    city.textContent = user.location;
    cTemp.textContent = `${user.current_temp} ${user.symbol}`;
    condition.textContent = user.condition;
    todayHigh.textContent = `High: ${user.max_temp}`;
    todayLow.textContent = `Low: ${user.min_temp}`;
    humidity.textContent = `Humidity: ${user.humidity}%`;
    sunrise.textContent = `Sunrise: ${user.sunrise}`;
    sunset.textContent = `Sunset: ${user.sunset}`;
}
