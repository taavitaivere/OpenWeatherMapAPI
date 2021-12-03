document.addEventListener("DOMContentLoaded", cityWeather)
function weatherDataFetch (city) {
    var key= "267150baac974e8778fd83a1510e781a"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data);
            drawWeather(data);
        })
        .catch(function () {

        })
}
function cityWeather(e) {
    weatherDataFetch("London")
}
function drawWeather(data) {
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    var description = data.weather[0].description;

    document.querySelector("#description").innerHTML = description;
    document.querySelector("#temp").innerHTML = celcius + "&deg;";
    document.querySelector("#location").innerHTML = data.name;
}