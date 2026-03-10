// var

let temp = document.getElementById('temp');


// temp fetch

function gettemp() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m')
        .then(re => re.json())
        .then(data => {
            temp.textContent = data.current.temperature_2m  + "C"
        })
        .catch(err => {
            temp.textContent = err
        })
}
gettemp()

setInterval(gettemp, 40000);