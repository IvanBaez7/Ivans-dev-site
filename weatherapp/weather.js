// Import the weatherConfig object from weather.prod.js (or config.prod.js)
import weatherConfig from './weather.prod.js'; // Adjust the path as needed

// Destructure apiUrl and apiKey from the imported weatherConfig object
const { apiUrl, apiKey } = weatherConfig;

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

// api linkage
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =
      Math.round(data.main.temp) + '\u00B0F';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'mph';

    if (data.weather[0].main == 'Clouds') {
      weatherIcon.src = 'clouds.png';
      document.querySelector('.card').style.background = 'var(--rain)';
    } else if (data.weather[0].main == 'Clear') {
      weatherIcon.src = 'clear.png';
      document.querySelector('.card').style.background = 'var(--clear)';
    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = 'rain.png';
      document.querySelector('.card').style.background = 'var(--rain)';
    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src = 'drizzle.png';
      document.querySelector('.card').style.background = 'var(--rain)';
    } else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = 'mist.png';
      document.querySelector('.card').style.background = 'var(--rain)';
    } else if (data.weather[0].main == 'Snow') {
      weatherIcon.src = 'snow.png';
      document.querySelector('.card').style.background = 'var(--snow)';
    }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
  }
}

// search btn logic
searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
  // if (searchBtn.clicked) {
  //   return document.classList.add('.rain');
  // }
});

// get time and date

function getCurrentTimeAndDay() {
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
  });
  const currentTime = currentDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const dayElement = document.querySelector('.day');
  if (dayElement) {
    dayElement.textContent = currentDay;
  }

  const timeElement = document.querySelector('.time');
  if (timeElement) {
    timeElement.textContent = currentTime;
  }
}

setInterval(getCurrentTimeAndDay, 1000);

// // getCurrentTimeAndDay();
// let currentDate = new Date();
// let cDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
// let time = currentDate.getHours();

// document.querySelector('.time').innerText = `${time}`;
