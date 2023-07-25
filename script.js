const weatherInfoElement = document.getElementById('weatherInfo');
const cityInputElement = document.getElementById('cityInput');

const API_KEY = '4acdd41a738494358059613bcfed633e'; // Reemplaza 'TU_API_KEY' con tu clave de API de OpenWeatherMap

async function getWeather() {
    const cityName = cityInputElement.value;

    // Llamada a la API de OpenWeatherMap para obtener los datos del tiempo
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        // Mostrar la información del tiempo en el elemento weatherInfo
        weatherInfoElement.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperatura: ${data.main.temp} °C</p>
            <p>Humedad: ${data.main.humidity}%</p>
            <p>Viento: ${data.wind.speed} m/s</p>
        `;

    } catch (error) {
        console.error('Error al obtener los datos del tiempo: ', error);
        weatherInfoElement.innerHTML = '<p>No se pudo obtener la información del tiempo.</p>';
    }
}
