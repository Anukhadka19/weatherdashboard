var searchButtonEl = document.getElementbyId('#search-button');
var clearButtonsEl = document.getElementById('#clear-history');
var nameInputEl = document.getElementbyId('#city-input');
var nameEl = document.getElementById('#city');
var currentCityEl = document.getElementbyId('#current-city');
var currentTempEl = document.getElementbyId('#current-temperature');
var currentHumidityEl = document.getElementById('#current-humidity');
var currentIndexEl = document.getElementById('#current-uvindex');

const apiiKey = '19b1915731fc1dec59bdcc739c41cdea';

var getWeatherForecast = function (nameEl) {
  var ApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q={city name} + nameEl + '&appid=' + {API key}; 

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayIssues(data);

        
          displayWarning(nameEl);
        }
      });

