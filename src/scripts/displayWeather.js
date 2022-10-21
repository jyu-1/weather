import user from "./user";

function dayResolver(num) {
    const time = new Date(num * 1000).getDay();
    switch (time) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Error";
    }
}

function timeResolver(num) {
    const time = new Date(num * 1000);
    if (time < 12) {
        return `${String(time.getHours()).padStart(2, "0")}:${String(
            time.getMinutes()
        ).padStart(2, "0")} AM`;
    }
    return `${String(time.getHours() % 12 || 12).padStart(2, "0")}:${String(
        time.getMinutes()
    ).padStart(2, "0")} PM`;
}

function dateResolver(num) {
    const time = new Date(num * 1000);
    return `${time.getMonth() + 1}/${time.getDate()}`;
}

function forecastList() {
    const forecastContainer = document.querySelector(".forecast");
    forecastContainer.textContent = "";
    user.forecast.forEach((element) => {
        const forecastBlock = document.createElement("div");
        const day = document.createElement("div");
        const icon = document.createElement("img");
        const date = document.createElement("div");
        const hour = document.createElement("div");
        const temp = document.createElement("div");

        day.classList.add("day");
        icon.classList.add("forecast-icon");
        date.classList.add("date");
        hour.classList.add("hour");
        temp.classList.add("temp");

        day.textContent = `${dayResolver(element.dt)}`;
        icon.src = `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`;
        date.textContent = `${dateResolver(element.dt)}`;
        hour.textContent = timeResolver(element.dt);
        temp.textContent = `${Math.round(element.main.temp)} ${user.symbol} `;

        forecastBlock.appendChild(day);
        forecastBlock.appendChild(icon);
        forecastBlock.appendChild(date);
        forecastBlock.appendChild(hour);
        forecastBlock.appendChild(temp);

        forecastContainer.appendChild(forecastBlock);
    });
}

export default function displayWeather() {
    const date = document.querySelector(".current-day");
    const icon = document.querySelector(".icon");
    const city = document.querySelector(".city");
    const temp = document.querySelector(".current-temp");
    const feels = document.querySelector(".feels");
    const condition = document.querySelector(".condition");
    const sunrise = document.querySelector(".sunrise");
    const sunset = document.querySelector(".sunset");
    const humidity = document.querySelector(".humidity");
    const pressure = document.querySelector(".pressure");

    date.textContent = dayResolver(user.current_time);
    icon.src = `http://openweathermap.org/img/wn/${user.icon}@2x.png`;
    city.textContent = user.location;
    temp.textContent = `${Math.round(user.current_temp)} ${user.symbol}`;
    feels.textContent = `Feels like ${Math.round(user.feels_like)} ${
        user.symbol
    }`;
    condition.textContent = user.condition;
    sunrise.textContent = `Sunrise: ${timeResolver(user.sunrise)}`;
    sunset.textContent = `Sunset: ${timeResolver(user.sunset)}`;
    humidity.textContent = `Humidity: ${user.humidity}%`;
    pressure.textContent = `Pressure: ${user.pressure} hPA`;

    forecastList();
}
