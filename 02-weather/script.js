document.addEventListener('DOMContentLoaded', () => {
  const cityInput =  document.getElementById('city-input');
  const getWeatherBtn =  document.getElementById('get-weather-btn');
  const weatherInfo = document.getElementById('weather-info');
  const cityNameDisplay = document.getElementById('city-name');
  const tempratureDisplay = document.getElementById('temperature');
  const descriptionDisplay = document.getElementById('description')
  const errorMessage = document.getElementById('error-message');

    const API_KEY = "739701c972097e496b9275d8cffa665f"
    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if(!city) return;

        try {
          const weatherData = await fetchWeatherData();
          displayWeatherData(weatherData)
        } catch(error){
          showError();
        }
    })
    async function fetchWeatherData(city){
      const url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API_KEY}`;
      const response = await fetch(url);
      console.log(typeof response);
      console.log("response  is :", response);
      if(!response.ok){
        throw new Error('City not found');
      }
      const data = await response.json();
      return data;
    }
    function displayWeatherData(weatherData){
      console.log("weather data is :", weatherData);
    }
    function showError(){
      weatherInfo.classList.add('hidden');
      errorMessage.classList.remove('hidden')
    }

})