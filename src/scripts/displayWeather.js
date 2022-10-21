import { user } from "./user";
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
    temp.textContent = `${Math.round(user.current_temp)} ${user.symbol}`;
    feels.textContent = `Feels like ${Math.round(user.feels_like)} ${
        user.symbol
    }`;
    condition.textContent = user.condition;
    sunrise.textContent = `Sunrise: ${convertTime(user.sunrise)} AM`;
    sunset.textContent = `Sunset: ${convertTime(user.sunset)} PM`;
    humidity.textContent = `Humidity: ${user.humidity}%`;
    pressure.textContent = `Pressure: ${user.pressure} hPA`;
}

function convertTime(num) {
    const time = new Date(num * 1000);
    return `${String(time.getHours() % 12 || 12).padStart(2, "0")}:${String(
        time.getMinutes()
    ).padStart(2, "0")}`;
}
