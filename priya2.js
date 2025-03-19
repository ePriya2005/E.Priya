const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            alert("City not found");
        } else {
            document.getElementById('city-name').textContent = `City: ${data.name}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('weather').textContent = `Weather: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
