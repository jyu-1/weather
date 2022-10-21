import { user, forecast } from "./user";
import { displayWeather } from "./displayWeather";
export { getWeather };

async function getWeather() {
    try {
        const responseWeather = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${user.location}&APPID=95533261ec1e43d4a7f6f93a6b7dacfe&units=${user.unit}`,
            { mode: "cors" }
        );
        const responseForecast = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${user.location}&APPID=95533261ec1e43d4a7f6f93a6b7dacfe&units=${user.unit}`,
            { mode: "cors" }
        );

        if (responseWeather.status === 200) {
            const dataWeather = await responseWeather.json();
            const dataForecast = await responseForecast.json();
            parseWeather(dataWeather);
        } else if (responseWeather.status === 404) {
            console.log("City not Found");
        } else {
            console.log("Bad Request");
        }
    } catch (err) {
        console.log("Failed to get Data");
    }
    displayWeather();
}

function parseWeather(weather) {
    user.location = weather.name;
    user.current_temp = weather.main.temp;
    user.feels_like = weather.main.feels_like;
    user.condition = weather.weather[0].main;
    user.sunrise = weather.sys.sunrise;
    user.sunset = weather.sys.sunset;
    user.humidity = weather.main.humidity;
    user.pressure = weather.main.pressure;
    user.timezone = weather.timezone;
    user.icon = weather.weather[0].icon;
}
