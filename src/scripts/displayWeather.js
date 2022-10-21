import { user, forecast } from "./user";
export { displayWeather };

function displayWeather() {
    const icon = document.querySelector(".icon");
    const city = document.querySelector(".city");
    const temp = document.querySelector(".current-temp");
    const feels = document.querySelector(".feels");
    const condition = document.querySelector(".condition");
    const sunrise = document.querySelector(".sunrise");
    const sunset = document.querySelector(".sunset");
    const humidity = document.querySelector(".humidity");
    const pressure = document.querySelector(".pressure");

    icon.src = `http://openweathermap.org/img/wn/${user.icon}@2x.png`;
    city.textContent = user.location;
    temp.textContent = `${user.current_temp} ${user.symbol}`;
    feels.textContent = `Feels like ${user.feels_like} ${user.symbol}`;
    condition.textContent = user.condition;
    sunrise.textContent = `Sunrise: ${user.sunrise}`;
    sunset.textContent = `Sunset: ${user.sunset}`;
    humidity.textContent = `Humidity: ${user.humidity}%`;
    pressure.textContent = `Pressure: ${user.pressure} hPA`;
}
