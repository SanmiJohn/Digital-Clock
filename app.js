function displayTime() {
    let now = new Date();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    let currentSecond = now.getSeconds();

    let HoursCount = document.getElementById('hourscount')
    let MinutesCount = document.getElementById('minutescount')
    let SecondsCount = document.getElementById('secondscount')

    HoursCount.innerText = currentHour
    MinutesCount.innerText = currentMinute
    SecondsCount.innerText = currentSecond
}

setInterval(displayTime, 1000);