// function displayTime (){
//     let dateTime = new Date();
//     let hours = dateTime.getHours();
//     let mins = dateTime.getMinutes();
//     let secs = dateTime.getSeconds();
//     if (hours>12){
//         hours = hours - 12
//     }
//     document.getElementById('hr').innerHTML = padZero( hours)
//     document.getElementById('min').innerHTML =padZero(  mins)
//     document.getElementById('sec').innerHTML =padZero(  secs)
// }
// function padZero(num){
//     return num<10 ? '0'+num:num
// }

// setInterval(displayTime,)
// const startBtn = document.getElementById("passbtn");
// startBtn.addEventListener('click',stopWatch());
// import startIcon from "./assets/start.svg"

const ElementsMs = document.getElementById("ms");
const ElementsSec = document.getElementById("sec");
const ElementsMin = document.getElementById("min");
let milliSeconds = 0;
let seconds = 0;
let minutes = 0;
let myInterval;
let start = false;
let laps = [];


function startTimer() {
  console.log(start);
  
  if (start === true) {
    console.log("OFF");
    start = false;
    document.getElementById('lapicon').src = "./assets/share.svg"
    document.getElementById('reseticon').src= "./assets/restart.svg"
    document.getElementById("starticon").src = "./assets/start.svg"
  clearInterval(myInterval);
  }

  else if (start === false){
console.log("ON");
    start = true;
    document.getElementById('lapicon').src="./assets/flag.svg"
    document.getElementById('reseticon').src= "./assets/restart.svg"
    document.getElementById("starticon").src = "./assets/stop.svg"
    myInterval = setInterval(function () {
      ElementsMs.innerHTML = milliSeconds;
      ElementsSec.innerHTML = seconds;
      ElementsMin.innerHTML = minutes;
      // console.log("log");
      milliSeconds += 1;
      if (milliSeconds === 100) {
        milliSeconds = 0;
        seconds += 1;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }
    }, 10);
  }
}

function resetTimer() {
  start = false;
    document.getElementById('lapicon').src = " "
    document.getElementById('reseticon').src= " "
    document.getElementById("starticon").src = "./assets/start.svg"
  clearInterval(myInterval);
  milliSeconds = 0;
  seconds = 0;
  minutes = 0;
  ElementsMs.innerHTML = milliSeconds;
  ElementsSec.innerHTML = seconds;
  ElementsMin.innerHTML = minutes;
  laps = []
  document.getElementById("lapBox").innerHTML = " "
}


function lapsTimes() {
  if(start === true){
  laps.push(`${minutes}:${seconds}:${milliSeconds}`);
  document.getElementById("lapBox").innerHTML = laps
    .map((lap, index) => "<div>" + `${index+1}. ` + lap + "</div>")
    .join("");
}}
