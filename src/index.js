// var

let temp = document.getElementById("temp");

let time = document.getElementById("time");

let windspd = document.getElementById("windspeed");

// temp fetch

let lat = undefined;
let longitude = undefined;

// get latitude longitude

navigator.geolocation.getCurrentPosition((pos) => {
  lat = pos.coords.latitude;
  longitude = pos.coords.longitude;
  gettemp();
  setInterval(gettemp, 40000);
});

//  get temp func

function gettemp() {
  /* 
      TODO: aput windo speed and humity 
  */
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${longitude}&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m&forecast_days=1`,
  )
    .then((re) => re.json())
    .then((data) => {
      temp.textContent = data.current.temperature_2m + "°C";
    })
    .catch((err) => {
      temp.textContent = err;
    });
}

// time

// date var

let date = new Date();

// get time func

function gettime() {
  const date = new Date();
  time.textContent =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}
gettime();
setInterval(gettime, 1000);
