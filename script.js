// To-dos:
// bootstrap list items to make the app look nice
//grab date-times "dt" 
// moment({unix}, "X") .format("MM/DD/YYYY HH:mm:ss")
//[0] is 9 am, [8] is 9am next day same time, [16] third day, [24] fourth day, [32] fifth day
// grabbing values for weather icon temp1.list[0].weather[0].icon, then plug in value '01d' into the get icon URL and then plug in href link!
// create event listener, put whole fetch inside of listener
// grab input from BUTTON ITSELF with event delegation: event.target.textContent to grab text of the 'City"

var APIKey = "533fc048d1bc1b13a13ca3f27b8a2fed";
var q = "";
var now = moment();
//Date and time formate for header
var currentDate = now.format('DD MM YYYY || HH:mm:ss');
$("#currentDay").text(currentDate);

$("#search-button").on("click", function (event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();

})


function getWeather(q) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + q + "&units=imperial&appid=" + APIKey;

    $.ajax({
        // gets the current weather info
        url: queryURL,
        method: "GET",
        error: (err => { //If API through error then alert 
            alert("Your city was not found. Check your spelling or enter a city code")
            return;
          })
        })
        .then(function (response) {
        console.log(response)
        $(".cityList").empty()
        $("#days").empty()

        var image = $('<img class="imgsize">').attr('src', 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png');

            
        });
    



          //////
var city = document.querySelector('#city-input').value;


        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=533fc048d1bc1b13a13ca3f27b8a2fed`) 
        
    }