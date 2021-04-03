/*
================

1. Create an HTML file that uses this javascript file.
2. The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
3. When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=45 with 
user latitude and longitude.
4. When you get the response from the server, print the current temperature in an <h3> marker.
5. Validate the form when you click on the button, if the inputs are empty or ar not numeric, show a warning message

================
*/
const form = document.querySelector('form');
const output = document.querySelector('h3');

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const lat = document.querySelector('#lat').value
  const lon = document.querySelector('#lon').value
  console.log(lat, lon)
  let URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;
  output.innerText = "Loading..."
  fetch(URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    output.innerText = `${data.main.temp}C`
    console.log(data);
  }); 
  
})
/*
document.querySelector("h1").innerText = "Loading temperature...";
fetch("https://fcc-weather-api.glitchasfasfsaf.me/api/current?lat=35&lon=160")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.querySelector("h1").innerText = `It feels like ${data.main.temp}C`;
  })
  .catch(() => {
    document.querySelector("h1").innerText = "Sorry, try again later";
  })*/