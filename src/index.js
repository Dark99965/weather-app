// var

let temp = document.getElementById('temp');


// temp fetch

setInterval(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m')
        .then(respnsse => respnsse.json())
        .then(data => {
            temp.textContent = data.current.temperature_2m + "C"
        }, 2000)
})
    