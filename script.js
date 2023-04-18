// To-dos:
// bootstrap cards, bootstrap list items to make the app look nice
//grab date-times "dt" with unix by adding 000 for seconds
// moment({unix}, "X") .format("MM/DD/YYYY HH:mm:ss")
//then 3 HOURS from now same format^^ by skipping some index values
//[0] is 9 am, [8] is 9am next day same time, [16] third day, [24] fourth day, [32] fifth day
// grabbing values for weather icon temp1.list[0].weather[0].icon, then plug in value '01d' into the get icon URL and then plug in href link!
// create event listener, put whole fetch inside of listener
// grab input from BUTTON ITSELF with event delegation: event.target.textContent to grab text of the 'City"

var searchForm = document.querySelector('#search-form');
var searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', function(event) {
    // Prevent the default behavior of the button (i.e., submitting the form)
    event.preventDefault();

})
var city = document.querySelector('#city-input').value;

fetch("http://api.openweathermap.org/geo/1.0/direct?q=seoul&limit=5&appid=533fc048d1bc1b13a13ca3f27b8a2fed")
    .then(response => response.json())
    .then(citiesFound => { 
        //the cities that render in console from array
        let firstCity = citiesFound[0]; 
        // the first city listed in the array, [0] will be the city I receive latitude and longitude coordinates from!
        console.log(firstCity.lat);
        console.log(firstCity.lon);

        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=533fc048d1bc1b13a13ca3f27b8a2fed`) 
        
        // we can continue chaining off of this response object, first fetch depends on the second fetch 
     })
    

        // we will then pull data from this stream
    .then(response => response.json())
    .then(data => {
        // data being logged from first fetch
        console.log(data);
     })