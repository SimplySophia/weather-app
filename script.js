// selecting the search input and search icon elements
const searchInput = document.querySelector('.search-btn input');
const searchIcon = document.querySelector('.search-btn a');


// function to fetch weather information based on the provided city
async function getWeather(city) {
    // fetching weather data from the OpenWeatherMap API
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ce110725e27568ef1be3b5e132c9ab86&units=metric`);
    
    // checking if the city is not found (HTTP status 404)
    if(res.status == 404) {
        // display error message
        document.querySelector('.error').style.display = "block";
    } else {
        // hiding error message if city is found
        document.querySelector('.error').style.display = "none";
    }

    // parsing the JSON response
    var data = await res.json();

    // logging the retrieved data to the console
    console.log(data);

    // updating the HTML elements with the weather information
    document.querySelector('.celcius').innerHTML = Math.round(data.main.temp) + "&deg;c";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidityp').innerHTML = data.main.humidity + "%";
    document.querySelector('.windp').innerHTML = Math.round(data.wind.speed) + "k/h";

    
}

// adding a click event listener to the search icon
searchIcon.addEventListener('click', () => {
    // calling the getWeather function with the value entered in the search input
   getWeather(searchInput.value);
})
