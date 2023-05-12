const inputBox = document.querySelector('.input_box');
const srch_btn = document.getElementById('srch_btn');
const title = document.getElementById('location');
const latitude = document.querySelector('.latitude');
const longitude = document.querySelector('.longitude');
const country = document.querySelector('.country');
const weather_img = document.querySelector('.icon');
const temperature = document.getElementById('temperature');
const feel = document.getElementById('feel');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const degree = document.querySelector('.degree');
const wind_speed = document.getElementById('wind');

async function checkwether(city){
    const api_key = "b1fbe21fe2292414f165d709511198da";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    console.log(weather_data);

    title.innerHTML = `${weather_data.name}`;

    latitude.innerHTML = `Latitude: ${weather_data.coord.lat}`;
    
    longitude.innerHTML = `longitude: ${weather_data.coord.lon}`;

    country.innerHTML = `${weather_data.sys.country}`;

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    feel.innerHTML = `${Math.round(weather_data.main.feels_like - 273.15)}`

    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    degree.innerHTML = `${weather_data.wind.deg}°`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src= "clouds.png";
            break;
        case 'Clear':
            weather_img.src= "clear.png";
            break;
        case 'Rain':
            weather_img.src= "rain.png";
            break;
        case 'Mist':
            weather_img.src= "mist.png";
            break;
        case 'Snow':
            weather_img.src = "snow.png"
        case 'Smoke':
            weather_img.src = "smoke.png"
        case 'Haze':
            weather_img.src = "haze.png"
    }    

    
}
srch_btn.addEventListener('click', ()=>{
    checkwether(inputBox.value);
});
