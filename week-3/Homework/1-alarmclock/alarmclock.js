//let timerID;
let changeTime;
let isPaused = false;

function setAlarm() {
  let alarmTime = document.querySelector('#alarmSet').valueAsNumber;
  let text = document.querySelector('#timeRemaining')
  let currentTime = alarmTime;
  let pause = document.querySelector('#pause')
  
  changeTime = setInterval(
    function (num) {
      if(isPaused)
        return;

      if (currentTime == 0) {
        //stop the timer here
        clearInterval(changeTime);
        //grab body and change color when it stops
        let bodyColor = document.querySelector('body');
        bodyColor.style.backgroundColor = "red";
        
        playAlarm()
      }
      
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

}

const stopAlarm = ()  => {
  currentTime = 0;
  text.innerText = "Time remaining: 00:00";
  clearInterval(changeTime);
  document.body.style.backgroundColor = 'white';
  audio.pause();
}

const pauseAlarm = () => {
  audio.pause();
  if(!isPaused){
    isPaused = true;
    document.getElementById("pause").textContent = "Resume alarm";
  } else {
    isPaused = false;
    document.getElementById("pause").textContent = "Pause alarm";
  }
}


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });

  document.getElementById("pause").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}



window.onload = setup;
