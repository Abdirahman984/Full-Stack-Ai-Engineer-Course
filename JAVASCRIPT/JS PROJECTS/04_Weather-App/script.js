const inputBox = document.querySelector("#inputBox")
const searchButton = document.querySelector(".search")
const displayCity = document.querySelector(".display-city")
const displayTemperature = document.querySelector(".display-temperature")
const weather = document.querySelector(".weather")
const displayHumidity = document.querySelector(".displayHumidity")
const displayWindSpeed = document.querySelector(".displayWindSpeed")
const displayImage = document.querySelector("#img img")


// ADDEVENT LISTNER
searchButton.addEventListener("click", function () {
    if (inputBox.value === "")
        return alert("you must write something");

    let cityName = inputBox.value

    fetchWeather(cityName);
})

function saveData (cityName){
    localStorage.setItem("data", cityName)
}

function showData (){
    const savedCity = localStorage.getItem("data")
    if(savedCity){
    fetchWeather(savedCity)
    }
}

async function fetchWeather(cityName) {
    try {
        const weatherApiKey = "343aad889e3697371be843d29668547f";
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}&units=metric`)

        if (!weatherResponse.ok) {
            throw new Error(`please enter valid city name and check spelling error ! ${weatherResponse.status}`)
        } else {
            const response = await weatherResponse.json();
            // console.log(response.weather[0].main)
            console.log(response)
            // display weather temperature
            displayTemperature.textContent = `${Math.round(response.main.temp)} °C`
            // display city name 
            displayCity.textContent = response.name

            // display humidty
            displayHumidity.textContent = `${response.main.humidity}%`

            // display wind speed
            displayWindSpeed.textContent = `${Math.round(response.wind.speed)}m/s`
            weather.style.display = "block"
            saveData()

            if (response.weather[0].main === 'Clouds') {
                displayImage.src = 'images/clouds.png'
            } else if (response.weather[0].main === 'Clear') {
                displayImage.src = 'images/clear.png'
            } else if (response.weather[0].main === 'Rain') {
                displayImage.src = 'images/rain.png'
            } else if (response.weather[0].main === 'Drizzle'){
                displayImage.src = 'images/drizzle.png'
            } else if (response.weather[0].main === 'Mist'){
                displayImage.src = 'images/mist.png'
            } else if (response.weather[0].main === 'Snow'){
                displayImage.src = 'images/snow.png'
            } else if (response.weather[0].main === 'Wind'){
                displayImage.src = 'images/wind.png'
            } else{
                displayImage.src = `images/clear.png`
            }

            saveData(response.name)
        }
    } catch (error) {
        alert(error)
    }
    inputBox.value = "";
}

showData();

