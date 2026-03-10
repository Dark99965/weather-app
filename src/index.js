// var

let temp = document.getElementById("temp");

let time = document.getElementById("time");

let windspd = document.getElementById("windspeed");

let hummity = document.getElementById("hummity");

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
      TODO: whther code
      
      *0-49: General State

      * 0-3: Clear, partly cloudy, or overcast
      * 10-19: Mist, smoke, or haze
      * 20-29: Precipitation, fog, or thunderstorm in the last hour
      * 30-39: Duststorm, sandstorm, or blowing snow

 * 50-69: Drizzle and Rain

      * 51, 53, 55: Light, moderate, dense drizzle
      * 56, 57: Freezing drizzle (light/dense)
      * 61, 63, 65: Slight, moderate, heavy rain
      * 66, 67: Freezing rain (light/heavy)

  * 70-79: Snow and Ice

     *  71, 73, 75: Slight, moderate, heavy snow
     *  77: Snow grains
     *  85, 86: Snow showers

 *  80-99: Showers and Thunderstorms

      80, 81, 82: Rain showers (slight/moderate/violent)
      95: Thunderstorm (slight/moderate)
      96, 99: Thunderstorm with slight/heavy hail
    
  */
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${longitude}&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m&forecast_days=1`,
  )
    .then((re) => re.json())
    .then((data) => {
      // get temp

      temp.textContent = data.current.temperature_2m;

      // get wind speed

      windspd.textContent = data.current.wind_speed_10m;

      // get humiyttaiy

      hummity.textContent = data.current.relative_humidity_2m;
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
