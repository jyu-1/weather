import { user } from "./user";
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
            parseForecast(dataForecast);
        } else if (responseWeather.status === 404) {
            console.log("City not Found");
        } else {
            console.log("Bad Request");
        }
    } catch (err) {
        console.log("Failed to get Data");
    }
}

function parseWeather(weather) {
    user.location = weather.name;
    user.current_temp = weather.main.temp;
    user.min_temp = weather.main.temp_min;
    user.max_temp = weather.main.temp_max;
    user.humidity = weather.main.humidity;
    user.sunrise = weather.sys.sunrise;
    user.sunset = weather.sys.sunset;
    user.timezone = weather.timezone;
    user.condition = weather.weather[0].main;
    user.current_time = weather.dt;
}

function parseForecast(forecast) {
    console.log(forecast);
}
