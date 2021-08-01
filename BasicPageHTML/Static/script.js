// Stopwatch functionality


var myArray = 'Sat Jul 31 2021 08:30:11 - 00:00:30, Sat Jul 31 2021 16:15:05 - 00:56:40, Sat Jul 31 2021 23:06:48 - 01:00:03';



let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;
let status = "stopped";

// var log = "blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blah"
// document.getElementById("logText").innerHTML = log;

function stopwatch(){

  var dt = new Date();
  document.getElementById("dateTime").innerHTML = dt;

  seconds++;

  if(seconds / 60 === 1){
    seconds = 0;
    minutes++;

    if(minutes / 60 === 1){
      minutes = 0;
      hours++;
    }
  }

  // Add a leading 0
  if(seconds < 10){
      displaySeconds = "0" + seconds.toString(); // toString method makes it a str
  }
  else{
      displaySeconds = seconds;
  }

  if(minutes < 10){
      displayMinutes = "0" + minutes.toString();
  }
  else{
      displayMinutes = minutes;
  }

  if(hours < 10){
      displayHours = "0" + hours.toString();
  }
  else{
      displayHours = hours;
  }

  // Display
  document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}

function startStop(){

    if(status === "stopped"){

        interval = window.setInterval(stopwatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";//txt chng
        status = "started";

    }
    else{

        document.getElementById("display2").innerHTML = hours + " hours " + minutes + " minutes " + seconds + " seconds ";
        
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";

        status = "stopped";

    }

}

// Reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped";

}