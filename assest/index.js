let inputBox = document.querySelector('.input-box');
let searchBtn = document.getElementById('search-btn');
let weatherImg = document.querySelector('.weather-img');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let humidity = document.getElementById('humidity');
let windSpeed = document.querySelector('#wind-speed');
 let form = document.querySelector('form')

 async function getUpdateWeather(city) {
    const apiKey = 'ec13f4f9b15698fddb09b4a200355d6f';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    let weatherData = await fetch(url).then(response => response.json());
    temperature.innerHTML = `${Math.round(weatherData.main.temp -273.15)}<sup>°C</sup>`;
    description.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}%`
    windSpeed.innerHTML  = `${weatherData.wind.speed}km/H`
    switch (weatherData.weather[0].main) {
        case 'Clouds':
            weatherImg.src = './assest/images/cloud.png';
            break;
        case 'Clear':
            weatherImg.src = './assest/images/clear.png';
            break;
        case 'Rain' || 'drizzle':
            weatherImg.src = './assest/images/rain.png';
            break;
        case 'Mist':
            weatherImg.src = './assest/images/mist.png';
            break;
        case 'Snow':
            weatherImg.src = './assest/images/snow.png';
            break;
        default:
            weatherImg.src = './assest/images/cloud.png'; 
            break;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    getUpdateWeather(inputBox.value)
    
});
