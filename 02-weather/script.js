document.addEventListener('DOMContentLoaded', () => {
  const cityInput =  document.getElementById('city-input');
  const getWeatherBtn =  document.getElementById('get-weather-btn');
  const weatherInfo = document.getElementById('weather-info');
  const cityNameDisplay = document.getElementById('city-name');
  const tempratureDisplay = document.getElementById('temperature');
  const descriptionDisplay = document.getElementById('description')
  const errorMessage = document.getElementById('error-message');

   getWeatherBtn.addEventListener('click', () => {
    const cityName = cityInput.value.trim();
    if(!city) return;
      
   })

})