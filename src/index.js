// var

let temp = document.getElementById('temp');

let time = document.getElementById('time')

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

// time

let date = new Date()

function gettime() {
    const date = new Date()
    time.textContent = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() 
}
gettime()
setInterval(gettime, 1000)