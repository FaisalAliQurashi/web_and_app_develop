document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '0795819b72ced4c2a9935c365c429ccc';  // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDisplay = document.getElementById('weatherDisplay');
            if (data.cod === 200) {
                const weatherData = `
                    <p>City: ${data.name}</p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>file Like: ${data.main.feels_like}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                weatherDisplay.innerHTML = weatherData;
            } else {
                weatherDisplay.innerHTML = `<p>City not found</p>`;
            }
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching the weather data', error);
            document.getElementById('weatherDisplay').innerHTML = `<p>Error fetching the weather data</p>`;
        });
});
