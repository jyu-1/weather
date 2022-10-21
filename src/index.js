import "./style.css";
import user from "./scripts/user";
import getWeather from "./scripts/getWeather";

const search = document.querySelector("#search");
search.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        user.location = search.value;
        getWeather();
    }
});

const change = document.querySelector("#change-unit");
change.addEventListener("click", () => {
    if (user.unit === "imperial") {
        user.unit = "metric";
        user.symbol = "C";
        change.textContent = "°C";
    } else {
        user.unit = "imperial";
        user.symbol = "F";
        change.textContent = "°F";
    }
    getWeather();
});

getWeather();
