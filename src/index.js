import "./style.css";
import { getWeather } from "./scripts/getWeather";
import { user } from "./scripts/user";

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
        change.textContent = "Change to Fahrenheit";
    } else {
        user.unit = "imperial";
        user.symbol = "F";
        change.textContent = "Change to Celsius";
    }
    getWeather();
});

getWeather();
