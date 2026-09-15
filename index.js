console.log("Digital Time");
let timeObj = document.getElementById("timer");

// creating modern function
const startTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
  let sec = date.getSeconds();
  

     // convert 24 hour into 12 hour time
    if(hour > 12){
        hour = hour%12;
    }

    // check hour
    if(hour > 9){
    }
    else{
        hour = "0"+hour;
    }

    // check min
     if(min > 9){
    }
    else{
        min = "0"+min;
    }
    
    //check sec
    if(sec > 9){
    }
    else{
        sec = "0"+sec;
    }

    return `${hour} : ${min} : ${sec}`;
}

setInterval(function setTime() {
  timeObj.innerHTML = startTime();
},1000);
