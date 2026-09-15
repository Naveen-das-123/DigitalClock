console.log("Digital Time");

let timeObj = document.getElementById("timer");

// Creating function
const startTime = () => {

    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let ampm;


    // Check AM or PM
    if (hour >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }


    // Convert 24-hour format into 12-hour format
    if (hour === 0) {
        hour = 12;
    } else if (hour > 12) {
        hour = hour % 12;
    }


    // Check hour
    if (hour < 10) {
        hour = "0" + hour;
    }


    // Check minute
    if (min < 10) {
        min = "0" + min;
    }


    // Check second
    if (sec < 10) {
        sec = "0" + sec;
    }


    // Return final time
    return `${hour} : ${min} : ${sec} ${ampm}`;
};


// Update clock every second
setInterval(function setTime() {

    timeObj.innerHTML = startTime();

}, 1000);
