document.addEventListener('DOMContentLoaded', () => {
  const cityInput =  document.getElementById('city-input');
  const getWeatherBtn =  document.getElementById('get-weather-btn');
  const weatherInfo = document.getElementById('weather-info');
  const cityNameDisplay = document.getElementById('city-name');
  const tempratureDisplay = document.getElementById('temperature');
  const descriptionDisplay = document.getElementById('description')
  const errorMessage = document.getElementById('error-message');

  const API_KEY = "fe7d5b917e2d7670f94be08dfbe71881"
   getWeatherBtn.addEventListener('click', () => {
    const cityName = cityInput.value.trim();
    if(!city) return;

   });

   function fetchWeatherData(city){
      console.log(city);
   }

   function displayWeatherData(weatherData){

   }

   function showWeatherData(){
    weatherInfo.classList.add('hidden');
    errorMessage.classList.remove('hidden')
   }

})