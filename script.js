const apiKey = "1d5a06f168fc87d0454576c182eb2e39";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const weatherCard = document.querySelector(".weather-card");
const weatherIcon = document.getElementById("weatherIcon");

const errorMessage = document.getElementById("errorMessage");
const loading = document.getElementById("loading");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
        errorMessage.innerText = "Please enter a city name";
        weatherCard.style.display = "none";
        return;
    }

    getWeather(city);
});

// Enter key support
cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});

async function getWeather(city) {
    try {
        // Reset UI
        errorMessage.innerText = "";
        weatherCard.style.display = "none";
        loading.style.display = "block";

        const apiUrl =
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);

        // Invalid city
        if (response.status === 404) {
            loading.style.display = "none";
            weatherCard.style.display = "none";
            errorMessage.innerText = "City not found";
            return;
        }

        // Invalid API key
        if (response.status === 401) {
            throw new Error("Invalid API Key");
        }

        if (!response.ok) {
            throw new Error("API Error");
        }

        const data = await response.json();

        // Show weather card
        weatherCard.style.display = "block";
        loading.style.display = "none";

        // Update UI
        cityName.innerText = data.name;
        temperature.innerText = `${Math.round(data.main.temp)}°C`;
        description.innerText = data.weather[0].description;
        humidity.innerText = `${data.main.humidity}%`;
        wind.innerText = `${data.wind.speed} km/h`;

        // Weather icon
        const iconCode = data.weather[0].icon;
        weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        weatherIcon.style.display = "block";

        // Clear input
        cityInput.value = "";

    } catch (error) {
        loading.style.display = "none";
        weatherCard.style.display = "none";
        errorMessage.innerText = error.message;
        console.log(error);
    }
}