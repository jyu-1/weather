export { getWeather };

const location = "los angeles";
const unit = "imperial";

async function getWeather() {
    try {
        const responseWeather = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=95533261ec1e43d4a7f6f93a6b7dacfe&units=${unit}`,
            { mode: "cors" }
        );
        const responseForecast = await fetch(
            `http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=95533261ec1e43d4a7f6f93a6b7dacfe&units=${unit}`,
            { mode: "cors" }
        );

        if (responseWeather.status === 200) {
            const dataWeather = await responseWeather.json();
            const dataForecast = await responseForecast.json();
            parseData(dataWeather, dataForecast);
        } else if (responseWeather.status === 404) {
            console.log("City not Found");
        } else {
            console.log("Bad Request");
        }
    } catch (err) {
        console.log("Failed to get Data");
    }
}

function parseData(weather, forecast) {
    console.log(weather);
    console.log(forecast);
}
