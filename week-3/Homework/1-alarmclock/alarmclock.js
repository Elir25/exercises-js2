//let timerID;
let changeTime;
function setAlarm() {
  let alarmTime = document.querySelector('#alarmSet').valueAsNumber;
  let text = document.querySelector('#timeRemaining')
  let currentTime = alarmTime;
  let pause = document.querySelector('#pause')
  
  changeTime = setInterval(
    function (num) {
      if (currentTime == 0) {
        //stop the timer here
        clearInterval(changeTime);
        //grab body and change color when it stops
        let bodyColor = document.querySelector('body');
        bodyColor.style.backgroundColor = "red";
        //play the alarm
        playAlarm()
      }
      /*if (currentTime >= 0) {
        text.innerText = "Time remaining: 00:0" + currentTime;
      }*/
      if (currentTime >= 10) {
        text.innerText = "Time remaining: 00:" + currentTime;
      } else if (currentTime <= 10 && currentTime >= 0) {
        text.innerText = "Time remaining: 00:0" + currentTime;
      } 
      
      //pause.addEventListener('click', () => {
        //pauseAlarm()
      //}) trying to pause the alarm
      currentTime = currentTime -1
    },
    1000
  );
  //change the background color to white when it stops
  document.querySelector('#stop').addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
  });

}




// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
