// var

let temp = document.getElementById('temp');


// temp fetch

fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m')
    .then(respnse => respnse.json)
    .then(data => console.log(data.current.temperature_2m))
    